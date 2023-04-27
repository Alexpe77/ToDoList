// import { getTasks } from "./getTasks.js";

// export function renderTasks() {
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