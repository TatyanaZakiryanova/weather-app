import { useEffect, useState } from 'react';
import { HandleSearchFunction, IWeatherData } from './types';
import CitySearch from '../CitySearch/CitySearch';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import styles from './WeatherData.module.scss';
import Spinner from '../Spinner/Spinner';
import NotFound from '../NotFound/NotFound';
import { fetchWeatherByCoords } from '../../utils/WeatherCoords/WeatherCoords';
import fetchWeatherDataCity from '../../utils/WeatherCity/WeatherCity';

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeatherByGeolocation = async () => {
      if (!navigator.geolocation) {
        console.error('Geolocation is not supported by this browser.');
        return;
      }
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const [currentWeather] = await Promise.all([fetchWeatherByCoords(latitude, longitude)]);
          setWeatherData(currentWeather);
          setIsLoading(true);
        });
      } catch (error) {
        console.error('Error fetching weather by geolocation:', error);
      }
    };
    fetchWeatherByGeolocation();
  }, []);

  const handleSearch: HandleSearchFunction = async (city: string) => {
    try {
      const currentWeatherData = await fetchWeatherDataCity(city);
      setWeatherData(currentWeatherData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {isLoading ? (
          <div>
            <CitySearch onSearch={handleSearch} />
            {weatherData ? (
              <WeatherDisplay weatherData={weatherData} />
            ) : (
              <div>
                <NotFound />
              </div>
            )}
          </div>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherData;
