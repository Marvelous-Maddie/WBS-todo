// Task class => Defines what a task is
class Task {
  constructor(desc, isCompleted = false) {
    this.desc = desc;
    this.isCompleted = isCompleted;
  }
}
// UI class => Handles every UI operation
class UI {
  static displayTasks() {
    const StoreTasks = [
      {
        desc: 'Walk the dog',
        isCompleted: false
      },
      {
        desc: 'Prepare presentation',
        isCompleted: false
      },
      {
        desc: 'Finish project',
        isCompleted: false
      },
      {
        desc: 'Go to the movies',
        isCompleted: false
      }
    ];
    const tasks = StoreTasks;

    tasks.forEach((task) => UI.addTask(task));
  }

  static addTask(task) {
    const tbody = document.getElementById('tasks');
    const row = document.createElement('tr');
    row.classList.add('d-flex');
    row.innerHTML = `
        <td class="col-9">${task.desc}</td>
        <td class="col-3">
            <a href="#" class="d-inline btn btn-success btn-sm complete"><i class="fas fa-check"></i></a>
            <a href="#" class="d-inline btn btn-danger btn-sm delete"><i class="fas fa-trash"></i></a>
        </td>
    `;
    tbody.appendChild(row);
  }

  static clearFields(e) {
    e.target.parentElement.parentElement.parentElement.remove();
  }

  static clearInput() {
    document.getElementById('input').value = '';
  }
}
// Local storage class => save data into the browser

// Global variables
const submit = document.getElementById('submit');
const tasks = document.getElementById('tasks');
// Event listeners
// Whenever page is loaded get stored tasks
document.addEventListener('DOMContentLoaded', UI.displayTasks);
submit.addEventListener('click', createTask);
tasks.addEventListener('click', deleteTask);
// Create
function createTask(e) {
  e.preventDefault();
  const input = document.getElementById('input').value;
  if (input === '') {
    alert('Is empty');
  } else {
    const task = new Task(input);
    UI.addTask(task);
    UI.clearInput(); /*new*/
  }
}
// Read

// Update (opcional)

// Delete
function deleteTask(e) {
  if (e.target.parentElement.classList.contains('delete')) {
    UI.clearFields(e);
  }
}
/* Javascript Classes
    Class defines how objects are created
    E.g: a class of person defines what a person is
    Then you can have instances of that class (person1, person2, person3)
    Create a new instance of class =>  const myObj = new Class(); => const person 1 = new Person();
    The 'this' keyword references the current object
*/

/*
Event propagation / delegation => instead of targeting the element, you target a parent
*/

/* To-do:
    On load -> Show tasks that are already stored
    Create remove method
    Create alert system
    Complete a task
 */

/*
 Pseudo-code:

function addTask
    takes in an instance of a Task
    Gets the body of the table
    Create a new row
    Puts value of task in row
    Append row to body

Entry point:
 Get value of input (#input)
 if value is empty
    then show alert -> Field is required
else
    call a function addTask  to show my task on window

 */
