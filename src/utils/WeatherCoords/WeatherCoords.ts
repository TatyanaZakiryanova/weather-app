import axios, { AxiosResponse } from 'axios';
import { FetchWeatherByCoordsFunction, IWeatherData } from '../../components/WeatherData/types';
import { apiEndpoint, apiKey } from '../../components/WeatherData/api';

export const fetchWeatherByCoords: FetchWeatherByCoordsFunction = async (latitude, longitude) => {
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
