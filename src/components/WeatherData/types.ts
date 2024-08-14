export interface IWeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

export type HandleSearchFunction = (city: string) => Promise<void>;

export type WeatherCityFunction = (city: string) => Promise<IWeatherData | null>;

export type FetchWeatherByCoordsFunction = (
  latitude: number,
  longitude: number,
) => Promise<IWeatherData | null>;
