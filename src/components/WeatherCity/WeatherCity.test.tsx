import { renderHook } from '@testing-library/react';
import mockedAxios from '../../mocks/mockAxios';
import useFetchWeatherDataCity from './WeatherCity';
import { apiEndpoint, apiKey } from '../WeatherData/api';
import mockWeatherData from '../../mocks/mockWeatherData';

beforeEach(() => {
  mockedAxios.get.mockClear();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('fetchWeatherDataCity', () => {
  test('fetchWeatherDataCity makes a correct API call', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockWeatherData });

    const { result } = renderHook(() => useFetchWeatherDataCity());

    const data = await result.current('New York');

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${apiEndpoint}weather?q=New York&appid=${apiKey}&units=metric`,
    );

    expect(data).toEqual(mockWeatherData);
  });

  test('fetchWeatherDataCity handles errors', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));

    const { result } = renderHook(() => useFetchWeatherDataCity());

    const data = await result.current('New York');

    expect(data).toBeNull();
  });
});
