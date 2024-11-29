let taskList = document.getElementById("taskList");

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value;

  if (taskText === "") {
    return; // Ne rien faire si le champ est vide
  }

  let li = document.createElement("li");
  li.innerHTML = taskText;
  
  let editButton = document.createElement("button");
  editButton.innerHTML =
  '<ion-icon name="pencil-outline" class="modify"></ion-icon>';
  editButton.onclick = function () {
    editTask(li);
  };
  
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML =
  '<ion-icon name="trash-outline" class="delete"></ion-icon>';
  deleteButton.onclick = function () {
    deleteTask(li);
  };
  
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  
  taskInput.value = "";
  console.log(li.firstChild);
}

function editTask(task) {
  let taskTextElement = task.firstChild;
  console.log(taskTextElement)
  let taskText = taskTextElement.textContent;

  let newTaskText = prompt("Modifier la tâche :", taskText);

  if (newTaskText === null || newTaskText === "") {
    return; 
  }

  taskTextElement.textContent = newTaskText;
}

function deleteTask(task) {
  taskList.removeChild(task);
}
