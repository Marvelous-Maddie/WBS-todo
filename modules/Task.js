// Task class => Defines what a task is
class Task {
  // Constructor: requires a description and sets completion to false
  constructor(desc, isCompleted = false) {
    this.id = Math.floor(Math.random() * 100);
    this.desc = desc;
    this.isCompleted = isCompleted;
  }
}
export default Task;
