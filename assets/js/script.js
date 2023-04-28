// -----------------Previous code------------------------------------------------

// import { createTask } from './modules/createTask.js';
// import { getTasks } from './modules/getTasks.js';
// import { getTaskList } from './modules/toDoList.js';
// import { toggleTask } from './modules/toggleTask.js';
// import { deleteTasks } from './modules/deleteTasks.js';
// import { renderTasks } from './modules/renderTasks.js';
// import { renderSelection } from './modules/renderSelection.js';

// Récupération des éléments du DOM
// const form = document.querySelector('.toDoForm');
// const input = document.querySelector('.taskInput');
// const list = document.querySelector('.toDoList');
// const selection = document.querySelector('.toDoSelection');
// const deleteBtn = document.getElementById('.deleteBtn');
// const list = [];

// // Gestionnaire d'événement pour l'envoi du formulaire
// form.addEventListener('submit', (e) => {
//   e.preventDefault(); // Empêcher l'envoi du formulaire
//   if (input.value !== '') {
//     createTask(input.value);
//     input.value = ''; // Réinitialisation de l'input
//     renderTasks(toDoList, getTasks());
//   }
// });

// // Gestionnaire d'événement pour la sélection
// selection.addEventListener('change', () => {
//   renderSelection(list, selection.value, getTasks());
// });

// // Gestionnaire d'événement pour les cases à cocher
// list.addEventListener('change', (e) => {
//   const id = e.target.parentElement.getAttribute('data-id');
//   toggleTask(id);
//   renderTasks(list, getTasks());
// });

// // Gestionnaire d'événement pour le bouton de suppression
// deleteBtn.addEventListener('click', () => {
//   deleteTasks();
//   renderTasks(list, getTasks());
// });

// // Affichage initial des tâches
// renderTasks(list, getTasks());

// function createTask(task) {
//   const taskElement = document.createElement('li');
//   taskElement.innerHTML = `
//     <input type="checkbox" class="checkBoxList" ${task.completed ? 'checked' : ''}>
//     <span class="taskName">${task.name}</span>
//     <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
//   `;
//   return taskElement;
// }

// function deleteTasks() {
//   const tasks = getTaskList();
//   const remainingTasks = tasks.filter(task => !task.completed);
//   toDoList.splice(0, toDoList.length, ...remainingTasks);
//   renderTasks();
// }

// function getTasks() {
//   return getTasks();
// }
// function createTask() {
//   return createTask();
// }

// function createTask(taskInput) {
//   list.push({ name: taskInput, completed: false });
// }
// function deleteTask(index) {
//   list.splice(index, 1);
// }

// function markTaskAsCompleted(index) {
//   list[index].completed = true;
// }

// function getTaskList() {
//   return toDoList;
// }
// function getTask() {
//   return toDoList;
// }

// function getTasks() {
//   return getTaskList();
// }

// function renderSelection() {
//   const selectElement = document.querySelector(".toDoSelection");
//   const selectedOption = selectElement.value;
//   const taskList = getTaskList();

//   if (selectedOption === "all") {
//     renderTasks(taskList);
//   } else if (selectedOption === "done") {
//     const filteredList = taskList.filter((task) => task.completed === true);
//     renderTasks(filteredList);
//   } else if (selectedOption === "notDone") {
//     const filteredList = taskList.filter((task) => task.completed === false);
//     renderTasks(filteredList);
//   }
// }

// function renderTasks() {
//   const taskList = taskList();
//   const taskListElement = document.querySelector(".toDoList");
//   taskListElement.innerHTML = "";

//   taskList.forEach((task, index) => {
//     const taskItem = document.createElement("li");
//     const taskCheckBox = document.createElement("input");
//     const taskName = document.createElement("span");
//     const deleteButton = document.createElement("button");

//     taskCheckBox.type = "checkbox";
//     taskCheckBox.checked = task.completed;
//     taskCheckBox.addEventListener("change", () => {
//       toggleTask(index);
//       renderTasks();
//     });

//     taskName.innerText = task.name;
//     if (task.completed) {
//       taskName.classList.add("completed");
//     }

//     deleteButton.innerText = "Delete";
//     deleteButton.addEventListener("click", () => {
//       deleteTask(index);
//       renderTasks();
//     });

//     taskItem.appendChild(taskCheckBox);
//     taskItem.appendChild(taskName);
//     taskItem.appendChild(deleteButton);
//     taskListElement.appendChild(taskItem);
//   });
// }

// const form = document.querySelector('.toDoForm');
// const input = document.querySelector('.taskInput');
// const list = [];
// const taskListElement = document.querySelector('.toDoList');
// const selection = document.querySelector('.toDoSelection');

// // Gestionnaire d'événement pour l'envoi du formulaire
// form.addEventListener('submit', (e) => {
// e.preventDefault(); // Empêcher l'envoi du formulaire
// if (input.value !== '') {
// createTask(input.value);
// input.value = ''; // Réinitialisation de l'input
// renderTasks();
// }
// });

// // Gestionnaire d'événement pour la sélection
// selection.addEventListener('change', () => {
// renderSelection();
// });

// // Gestionnaire d'événement pour les cases à cocher
// taskListElement.addEventListener('change', (e) => {
// const id = e.target.parentElement.getAttribute('data-id');
// toggleTask(id);
// renderTasks();
// });

// // Gestionnaire d'événement pour le bouton de suppression
// const deleteBtn = document.querySelector('.deleteBtn');
// deleteBtn.addEventListener('click', () => {
// deleteTasks();
// renderTasks();
// });

// // Affichage initial des tâches
// renderTasks();

// function createTask(taskInput) {
// list.push({ name: taskInput, completed: false });
// }

// function deleteTasks() {
// const remainingTasks = list.filter(task => !task.completed);
// list.splice(0, list.length, ...remainingTasks);
// }

// function markTaskAsCompleted(index) {
// list[index].completed = true;
// }

// function getTaskList() {
// return list;
// }

// function renderSelection() {
// const selectedOption = selection.value;

// if (selectedOption === 'all') {
// renderTasks();
// } else if (selectedOption === 'done') {
// const filteredList = list.filter((task) => task.completed === true);
// renderTasks(filteredList);
// } else if (selectedOption === 'notDone') {
// const filteredList = list.filter((task) => task.completed === false);
// renderTasks(filteredList);
// }
// }

// function renderTasks(taskList = list) {
// taskListElement.innerHTML = '';

// taskList.forEach((task, index) => {
// const taskItem = document.createElement('li');
// const taskCheckBox = document.createElement('input');
// const taskName = document.createElement('span');
// const deleteButton = document.createElement('button');

// ------------------------------Previous code-----------------------------------

const form = document.querySelector('.toDoForm');
const input = document.querySelector('.taskInput');
const list = [];
const taskListElement = document.querySelector('.toDoList');
const selection = document.querySelector('.toDoSelection');

// Gestionnaire d'événement pour l'envoi du formulaire
form.addEventListener('submit', (e) => {
e.preventDefault(); // Empêcher l'envoi du formulaire
if (input.value !== '') {
createTask(input.value);
input.value = ''; // Réinitialisation de l'input
renderTasks();
}
});

// Gestionnaire d'événement pour la sélection
selection.addEventListener('change', () => {
renderSelection();
});

// Gestionnaire d'événement pour les cases à cocher
taskListElement.addEventListener('change', (e) => {
const id = e.target.parentElement.getAttribute('data-id');
toggleTask(id);
renderTasks();
});

// Gestionnaire d'événement pour le line through
// const lineThrough = document.querySelector('.toDoList').toggleTask(Line_Through);
// if(task.completed) {
//   taskItem.style.textDecoration = "linethrough";
// }else{
//   taskItem.style.textDecoration = "none";
// }

// function Line_Through (toDoList) {
//   list[index].lineThrough = true;
// }

// const Line_Through = "lineThrough";
// Element.parentNode.querySelector('span').toggleTask(Line_Through);
// let Line_Through;
// function getLineThrough

// Gestionnaire d'événement pour le bouton de suppression
const deleteBtn = document.querySelector('.deleteBtn');
deleteBtn.addEventListener('click', () => {
deleteTasks();
renderTasks();
});

// Affichage initial des tâches
renderTasks();

function createTask(taskInput) {
list.push({ name: taskInput, completed: false });
}

function deleteTasks() {
const remainingTasks = list.filter(task => !task.completed);
list.splice(0, list.length, ...remainingTasks);
}

function markTaskAsCompleted(index) {
list[index].completed = true;
}

function getTaskList() {
return list;
}

function renderSelection() {
const selectedOption = selection.value;

if (selectedOption === 'all') {
renderTasks();
} else if (selectedOption === 'done') {
const filteredList = list.filter((task) => task.completed === true);
renderTasks(filteredList);
} else if (selectedOption === 'notDone') {
const filteredList = list.filter((task) => task.completed === false);
renderTasks(filteredList);
}
}

function renderTasks(taskList = list) {
taskListElement.innerHTML = '';

taskList.forEach((task, index) => {
const taskItem = document.createElement('li');
const taskCheckBox = document.createElement('input');
const taskName = document.createElement('span');
const deleteButton = document.createElement('button');

taskCheckBox.type = 'checkbox';
taskCheckBox.checked = task.completed;
taskCheckBox.addEventListener('change', () => {
  toggleTask(index);
  renderTasks();
});

taskName.innerText = task.name;
if (task.completed) {
  taskName.classList.add('completed');
  taskName.style.textDecoration = 'line-through';
}else{
  taskName.style.textDecoration = 'none';
}

deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
deleteButton.addEventListener('click', () => {
  deleteTask(index);
  renderTasks();
});

taskItem.appendChild(taskCheckBox);
taskItem.appendChild(taskName);
taskItem.appendChild(deleteButton);
taskListElement.appendChild(taskItem);
});
}

function toggleTask(index) {
const task = list[index];
if (task.completed) {
task.completed = false;
taskListElement.children[index].querySelector('span').classList.remove('completed');
} else {
task.completed = true;
taskListElement.children[index].querySelector('span').classList.add('completed');
}
}

function deleteTask(index) {
list.splice(index, 1);
}