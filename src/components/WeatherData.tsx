import { useCallback, useState } from 'react';
import { HandleSearchFunction, IWeatherData } from './types';
import axios from 'axios';
import CitySearch from './CitySearch';
import WeatherDisplay from './WeatherDisplay';

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  const apiEndpoint = 'https://api.openweathermap.org/data/2.5/';
  const apiKey = 'ee3f407327bd98a35e64b2a76796d0f0';

  const fetchWeatherData = useCallback(
    async (city: string) => {
      try {
        const response = await axios.get(
          `${apiEndpoint}weather?q=${city}&appid=${apiKey}&units=metric`,
        );
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
    },
    [apiEndpoint, apiKey],
  );

  const handleSearch: HandleSearchFunction = async (city: string) => {
    try {
      const currentWeatherData = await fetchWeatherData(city);
      setWeatherData(currentWeatherData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <CitySearch onSearch={handleSearch} />
      <div>
        {weatherData ? <WeatherDisplay weatherData={weatherData} /> : <div>Data not found</div>}
      </div>
    </>
  );
};

export default WeatherData;
