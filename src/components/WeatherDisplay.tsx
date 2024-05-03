import { IWeatherData } from './types';

const WeatherDisplay = ({ weatherData }: { weatherData: IWeatherData }) => {
  return (
    <>
      <div>
        <h1>{weatherData.name}</h1>
        <span>{weatherData.sys.country}</span>
        <div>Image</div>
        <h1>{weatherData.main.temp}°C</h1>
        <h2>{weatherData.weather[0].main}</h2>
        <h3>feels like {weatherData.main.feels_like} °C</h3>
      </div>
      <div>
        <h2>Wind speed:{weatherData.wind.speed}km/h</h2>
        <h2>Humidity:{weatherData.main.humidity}%</h2>
        <h2>Pressure: {weatherData.main.pressure} hPa</h2>
      </div>
    </>
  );
};

export default WeatherDisplay;
