import axios, { AxiosResponse } from 'axios';
import { apiEndpoint, apiKey } from '../WeatherData/api';
import { IWeatherData } from '../WeatherData/types';

export const fetchWeatherByCoords = async (
  latitude: number,
  longitude: number,
): Promise<IWeatherData | null> => {
  try {
    const response: AxiosResponse<IWeatherData> = await axios.get(
      `${apiEndpoint}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
