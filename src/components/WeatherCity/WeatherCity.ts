import axios from 'axios';
import { apiEndpoint, apiKey } from '../WeatherData/api';
import { WeatherCityFunction } from '../WeatherData/types';

const useFetchWeatherDataCity = () => {
  const fetchWeatherDataCity: WeatherCityFunction = async (city) => {
    try {
      const response = await axios.get(
        `${apiEndpoint}weather?q=${city}&appid=${apiKey}&units=metric`,
      );
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };
  return fetchWeatherDataCity;
};

export default useFetchWeatherDataCity;
