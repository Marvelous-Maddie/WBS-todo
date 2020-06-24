// Task class => Defines what a task is
class Task {
  // Constructor: requires a description and sets completion to false
  constructor(desc, isCompleted = false) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.id = Math.floor(Math.random() * 100);
    this.desc = desc;
    this.isCompleted = isCompleted;
  }
}
// UI class => Handles every UI operation
class UI {
  // Gets tasks and loops through to to call addTask method
  static displayTasks() {
    const StoreTasks = [
      {
        id: '670fik88a',
        desc: 'Walk the dog',
        isCompleted: false
      },
      {
        id: '7pqz8tkuc',
        desc: 'Prepare presentation',
        isCompleted: false
      },
      {
        id: 'g5wzv8ulf',
        desc: 'Finish project',
        isCompleted: false
      },
      {
        id: 'gu9ug4acr',
        desc: 'Go to the movies',
        isCompleted: false
      }
    ];
    const tasks = StoreTasks;
    const tasks = Storage.getTasks();

    tasks.forEach(task => UI.addTask(task));
  }
  // Adds a task to the UI
  static addTask(task) {
    const tbody = document.getElementById('tasks');
    const row = document.createElement('tr');
    row.classList.add('d-flex');
    row.innerHTML = `
        <td data-taskID="${task.id}" class="col-9">${task.desc}</td>
        <td class="col-3 d-flex justify-content-center">
            <a href="#" class="d-inline btn btn-success btn-sm complete"><i class="fas fa-check"></i></a>
            <a href="#" class="d-inline btn btn-info btn-sm edit"><i class="fas fa-edit"></i></a>
            <a href="#" class="d-inline btn btn-danger btn-sm delete"><i class="fas fa-trash"></i></a>
        <td class="col-9">${task.desc}</td>
        <td data-id="${task.id}" class="col-3">
            <button class="d-inline btn btn-success btn-sm complete"><i class="fas fa-check"></i></button>
            <button class="d-inline btn btn-danger btn-sm delete"><i class="fas fa-trash"></i></button>
        </td>
    `;
    tbody.appendChild(row);
  }

  static removeTask(e) {
    e.target.parentElement.parentElement.parentElement.remove();
  }

  // Removes a taks from the UI
  static removeTask(e) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
  // Clears input
  static clearInput() {
    document.getElementById('input').value = '';
  }
}
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
}
// Global variables
const submit = document.getElementById('submit');
const tasks = document.getElementById('tasks');
// Event listeners
// Whenever page is loaded get stored tasks
document.addEventListener('DOMContentLoaded', UI.displayTasks);
// On submit, create task
submit.addEventListener('click', createTask);
// On click on delete icon, delete task
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
    UI.clearFields();
    Storage.addTask(task);
    UI.clearInput();
  }
}
// Update (opcional)

// Delete
function deleteTask(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('delete')) {
    UI.removeTask(e);
    const taskId = Number(
      e.target.parentElement.parentElement.getAttribute('data-id')
    );
    Storage.removeTask(taskId);
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
