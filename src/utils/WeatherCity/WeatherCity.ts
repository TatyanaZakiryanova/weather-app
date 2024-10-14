import axios from 'axios';
import { WeatherCityFunction } from '../../components/WeatherData/types';
import { apiEndpoint, apiKey } from '../../components/WeatherData/api';

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

export default fetchWeatherDataCity;
