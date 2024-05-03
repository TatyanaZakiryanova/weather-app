import axios from 'axios';
import { apiEndpoint, apiKey } from '../WeatherData/api';

export const fetchWeatherByCoords = async (latitude: number, longitude: number) => {
  try {
    const response = await axios.get(
      `${apiEndpoint}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
