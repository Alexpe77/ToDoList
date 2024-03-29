const form = document.querySelector('.toDoForm');
const input = document.querySelector('.taskInput');
const list = [];
const taskListElement = document.querySelector('.toDoList');
const selection = document.querySelector('.toDoSelection');
const addBtn = document.getElementById('submitBtn');
let fullList = JSON.parse(localStorage.getItem('taskList')) || [];

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

// Gestionnaire d'événement pour le bouton de suppression
const deleteBtn = document.querySelector('.deleteBtn');
deleteBtn.addEventListener('click', () => {
  delete_tasks();
  renderTasks();
});

// Affichage initial des tâches
renderTasks();

addBtn.addEventListener('click', () => {
  const taskInput = taskListElement.value.trim();
  if (taskInput) {
    createTask(taskInput);
    renderTasks();
    taskListElement.value = '';
  }
});

function createTask(taskInput) {
  list.push({ name: taskInput, completed: false });
  localStorage.setItem('taskList', JSON.stringify(list));
}

function delete_tasks() {
  const remainingTasks = list.filter(task => !task.completed);
  list.splice(0, list.length, ...remainingTasks);
  localStorage.setItem('taskList', JSON.stringify(list));
}

function markTaskAsCompleted(index) {
  list[index].completed = true;
  localStorage.setItem('taskList', JSON.stringify(list));
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
  taskName.style.fontStyle = 'italic';
}else{
  taskName.style.textDecoration = 'none';
}

deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
deleteButton.addEventListener('click', () => {
  deleteTasks(index);
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
  localStorage.setItem('taskList', JSON.stringify(list));
}

function deleteTasks(index) {
  list.splice(index, 1);
  localStorage.setItem('taskList', JSON.stringify(list));
}