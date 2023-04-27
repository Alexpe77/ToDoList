// import { getTaskList } from "./toDoList.js";
// import { renderTasks } from "./renderTasks.js";

// export function getTasks() {
//   return getTaskList();
// }

// export function renderSelection() {
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