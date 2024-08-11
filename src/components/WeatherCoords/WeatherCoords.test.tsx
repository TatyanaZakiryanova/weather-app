import mockedAxios from '../../mocks/mockAxios';
import mockWeatherData from '../../mocks/mockWeatherData';
import { apiEndpoint, apiKey } from '../WeatherData/api';
import { fetchWeatherByCoords } from './WeatherCoords';

beforeEach(() => {
  mockedAxios.get.mockClear();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('fetchWeatherByCoords', () => {
  test('makes a correct API call with latitude and longitude', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockWeatherData });

    const latitude = 35.6895;
    const longitude = 139.6917;

    const data = await fetchWeatherByCoords(latitude, longitude);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${apiEndpoint}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
    );

    expect(data).toEqual(mockWeatherData);
  });

  test('FetchWeatherByCoords handles errors', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));

    const latitude = 35.6895;
    const longitude = 139.6917;

    const data = await fetchWeatherByCoords(latitude, longitude);

    expect(data).toBeNull();
  });
});
