// Import Storage class
import Storage from './Storage.js';
import Weather from './Weather.js';
//Motivational Quotes
const quote1 = {
  quote: 'All we have to decide is what to do with the time that is given us.',
  author: 'J.R.R. Tolkien',
  title: 'The Fellowship of the Ring'
};
const quote2 = {
  quote: 'Be yourself and people will like you.',
  author: 'J. Kinney',
  title: 'Diary of a Wimpy Kid'
};
const quote3 = {
  quote:
    'The moment you doubt whether you can fly, you cease forever to be able to do it.',
  author: 'J.M. Barrie',
  title: 'Peter Pan'
};
const quote4 = {
  quote: 'Time you enjoy wasting is not wasted time.',
  author: 'M. Troly-Curtin',
  title: 'Phrynette Married'
};
const quote5 = {
  quote:
    'One sees clearly only with the heart. Anything essential is invisible to the eyes.',
  author: 'A. de Saint-Exupéry',
  title: 'The Little Prince'
};
const motivationalQuotes = new Array(quote1, quote2, quote3, quote4, quote5);
// UI class => Handles every UI operation
class UI {
  // Gets tasks and loops through to to call addTask method
  static displayTasks() {
    const tasks = Storage.getTasks();
    tasks.forEach(task => UI.addTask(task));
  }
  // Adds a task to the UI
  static addTask(task) {
    const tbody = document.getElementById('tasks');
    const row = document.createElement('tr');
    row.classList.add('d-flex');
    row.innerHTML = `
          ${
            task.isCompleted === true
              ? '<td class="col-9"><s>' + task.desc + '</s></td>'
              : '<td class="col-9">' + task.desc + '</td>'
          }
          <td data-id="${task.id}" class="col-3">
            ${
              task.isCompleted === true
                ? `<button class="d-inline btn btn-info btn-sm complete">
                    <i class="fas fa-undo"></i>
                </button>`
                : `<button class="d-inline btn btn-success btn-sm complete">
                    <i class="fas fa-check"></i>
                </button>`
            } 
              <button class="d-inline btn btn-danger btn-sm delete"><i class="fas fa-trash"></i></button>
          </td>
      `;
    tbody.appendChild(row);
  }
  // Removes a taks from the UI
  static removeTask(e) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
  // Clears input
  static clearInput() {
    document.getElementById('input').value = '';
  }
  // Selects and displays motivational quote
  static selectQuote() {
    const randomNumber = Math.floor(Math.random() * 5);
    const quote = motivationalQuotes[randomNumber].quote;
    const author = motivationalQuotes[randomNumber].author;
    const title = motivationalQuotes[randomNumber].title;
    document.getElementById(
      'quote'
    ).innerHTML = `<p id="quote" class="mb-0">\"${quote}\"</p>`;
    document.getElementById(
      'author'
    ).innerHTML = `<footer id="author" class="blockquote-footer">${author} in <cite id="title"></cite></footer>`;
    document.getElementById(
      'title'
    ).innerHTML = `<cite id="title">${title}</cite>`;
  }
  // Show Weather
  static showWeather(data) {
    const div = document.getElementById('weather');
    div.innerHTML = `
    <img id="weather-icon" src="${data.current.weather_icons}"/>
    ${data.location.name}
    ${data.current.temperature} °C `;
  }
}
export default UI;
