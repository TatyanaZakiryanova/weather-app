import { PiDropLight, PiWindLight } from 'react-icons/pi';
import { IWeatherData } from '../WeatherData/types';
import styles from './WeatherDisplay.module.scss';
import { HiArrowSmallDown } from 'react-icons/hi2';
import { WeatherImage } from './WeatherImage';

const WeatherDisplay = ({ weatherData }: { weatherData: IWeatherData }) => {
  return (
    <>
      <div className={styles.weather}>
        <h1>{weatherData.name}</h1>
        <span>{weatherData.sys.country}</span>
        <span className={styles.image}>{WeatherImage(weatherData.weather[0].main)}</span>
        <h1>{weatherData.main.temp}°C</h1>
        <h2>{weatherData.weather[0].main}</h2>
        <h3>feels like {weatherData.main.feels_like} °C</h3>
      </div>

      <div className={styles.inform}>
        <div className={styles.wind}>
          <PiWindLight className={styles.windicon} />
          <div>
            <h2>{weatherData.wind.speed}km/h</h2>
            <p>Wind speed</p>
          </div>
        </div>

        <div className={styles.humidity}>
          <PiDropLight className={styles.humidityicon} />
          <div>
            <h2>{weatherData.main.humidity}%</h2>
            <p>Humidity</p>
          </div>
        </div>

        <div className={styles.pressure}>
          <HiArrowSmallDown className={styles.pressureicon} />
          <h2>{weatherData.main.pressure} hPa</h2>
          <p>Pressure</p>
        </div>
      </div>
    </>
  );
};

export default WeatherDisplay;
