import { IWeatherData } from '../components/WeatherData/types';

const mockWeatherData: IWeatherData = {
  name: 'New York',
  main: {
    temp: 22,
    feels_like: 21,
    pressure: 1012,
    humidity: 65,
  },
  sys: {
    country: 'US',
  },
  weather: [
    {
      main: 'Clear',
    },
  ],
  wind: {
    speed: 5,
  },
};

export default mockWeatherData;
