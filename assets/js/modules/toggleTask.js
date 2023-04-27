export function toggleTask(event) {
  const checkbox = event.target;
  const index = checkbox.dataset.index;
  toDoList.markTaskAsCompleted(index);
  renderTasks();
}