import { useEffect, useState } from 'react';
import { HandleSearchFunction, IWeatherData } from './types';
import CitySearch from '../CitySearch/CitySearch';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import { fetchWeatherByCoords } from './WeatherCoords';
import styles from './WeatherData.module.scss';
import useFetchWeatherDataCity from './WeatherCity';
import Spinner from '../Spinner/Spinner';

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchWeatherDataCity = useFetchWeatherDataCity();

  useEffect(() => {
    const fetchWeatherByGeolocation = async () => {
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
  }, [fetchWeatherByCoords]);

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
            {weatherData ? <WeatherDisplay weatherData={weatherData} /> : <div>Data not found</div>}
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
