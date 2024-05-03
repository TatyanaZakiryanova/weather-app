import axios from 'axios';
import { apiEndpoint, apiKey } from '../WeatherData/api';

export const fetchWeatherDataCity = async (city: string) => {
  try {
    const response = await axios.get(
      `${apiEndpoint}weather?q=${city}&appid=${apiKey}&units=metric`,
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
