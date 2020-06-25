import UI from './UI.js';
class Weather {
  static async getWeather(position) {
    /*const res = await fetch(
      `https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
    );*/
    // Leipzig
    const res = await fetch(
      `https://api.weatherstack.com/current?access_key=77d3e9e87be88a39241934a280aba6b8&query=${position.coords.latitude},${position.coords.longitude}`
    );
    const data = await res.json();
    UI.showWeather(data);
  }
}
export default Weather;
