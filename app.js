import UI from './modules/UI.js';
import Storage from './modules/Storage.js';
import Task from './modules/Task.js';
import Weather from './modules/Weather.js';
// Global variables
const submit = document.getElementById('submit');
const tasks = document.getElementById('tasks');
// Event listeners
// Whenever page is loaded get stored tasks
document.addEventListener('DOMContentLoaded', renderDashboard);
// On submit, create task
submit.addEventListener('click', createTask);
// On click on delete icon, delete task
tasks.addEventListener('click', deleteTask);
tasks.addEventListener('click', checkTask);
// Functions
// Render content
function renderDashboard() {
  UI.displayTasks();
  UI.selectQuote();
  getLocation();
}
// Create
function createTask(e) {
  e.preventDefault();
  const input = document.getElementById('input').value;
  if (input === '') {
    alert('Is empty');
  } else {
    const task = new Task(input);
    UI.addTask(task);
    Storage.addTask(task);
    UI.clearInput();
  }
}
// Read
// This is done on-load
// Update (opcional)

// Delete
function deleteTask(e) {
  if (e.target.parentElement.classList.contains('delete')) {
    UI.removeTask(e);
    const taskId = Number(
      e.target.parentElement.parentElement.getAttribute('data-id')
    );
    Storage.removeTask(taskId);
  }
}
// Mark/Unmark task
function checkTask(e) {
  if (e.target.parentElement.classList.contains('complete')) {
    const tbody = document.getElementById('tasks');
    const taskId = Number(
      e.target.parentElement.parentElement.getAttribute('data-id')
    );
    Storage.checkTask(taskId);
    tbody.innerHTML = '';
    UI.displayTasks();
  }
}
// Get location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(Weather.getWeather);
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
