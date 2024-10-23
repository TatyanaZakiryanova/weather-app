import { useEffect, useState } from 'react';

import fetchWeatherDataCity from '../../utils/WeatherCity/WeatherCity';
import { fetchWeatherByCoords } from '../../utils/WeatherCoords/WeatherCoords';
import CitySearch from '../CitySearch/CitySearch';
import NotFound from '../NotFound/NotFound';
import Spinner from '../UI/Spinner/Spinner';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import { HandleSearchFunction, IWeatherData } from './types';
import styles from './WeatherData.module.scss';

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeatherByGeolocation = () => {
      if (!navigator.geolocation) {
        console.error('Geolocation is not supported by this browser.');
        return;
      }
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const currentWeather = await fetchWeatherByCoords(latitude, longitude);
          setWeatherData(currentWeather);
          setIsLoaded(true);
        } catch (error) {
          console.error('Error fetching weather by geolocation:', error);
        }
      });
    };
    fetchWeatherByGeolocation();
  }, [setWeatherData, setIsLoaded]);

  const handleSearch: HandleSearchFunction = async (city: string) => {
    try {
      const currentWeatherData = await fetchWeatherDataCity(city);
      setWeatherData(currentWeatherData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={styles.container}>
      {isLoaded ? (
        <div>
          <CitySearch onSearch={handleSearch} />
          {weatherData ? <WeatherDisplay weatherData={weatherData} /> : <NotFound />}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default WeatherData;
