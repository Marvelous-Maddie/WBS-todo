// Local storage class => save data into the browser
class Storage {
  // Gets tasks from local storage if key exists, otherwise, returns an empty array that will be passed to UI.displayTasks
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }
  // Gets tasks from local storage, pushes new task and sets local storage
  static addTask(task) {
    const tasks = Storage.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  // Remove item from local storage
  static removeTask(id) {
    const tasks = Storage.getTasks();
    tasks.forEach((task, index) => {
      if (task.id === id) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  // Mark/unmark task
  static checkTask(id) {
    const tasks = Storage.getTasks();
    tasks.forEach(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
export default Storage;
