import UI from './UI.js';
class Weather {
  static async getWeather(position) {
    /*const res = await fetch(
      `https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
    );*/
    // Leipzig
    const res = await fetch(
      `https://fcc-weather-api.glitch.me/api/current?lat=51.3397&lon=12.3731`
    );
    const data = await res.json();
    UI.showWeather(data);
  }
}
export default Weather;
