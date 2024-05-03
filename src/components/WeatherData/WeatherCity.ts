import axios from 'axios';
import { apiEndpoint, apiKey } from './api';
import { useCallback } from 'react';

const useFetchWeatherDataCity = () => {
  const fetchWeatherDataCity = useCallback(async (city: string) => {
    try {
      const response = await axios.get(
        `${apiEndpoint}weather?q=${city}&appid=${apiKey}&units=metric`,
      );
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  }, []);
  return fetchWeatherDataCity;
};
export default useFetchWeatherDataCity;
