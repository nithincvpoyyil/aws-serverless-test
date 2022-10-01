import { WeatherMapAPIResponse } from '../../@types';
import { responseMapper } from '../responseMapper';

const stubData: WeatherMapAPIResponse = {
  base: '',
  clouds: { all: 0 },
  cod: 1,
  coord: { lat: 1, lon: 2 },
  dt: 1234,
  id: 45785,
  main: {
    feels_like: 1,
    humidity: 90,
    pressure: 20,
    temp: 21,
    temp_max: 22,
    temp_min: 25,
  },
  name: 'stub data',
  sys: { country: 'au', id: 1245, sunrise: 5, sunset: 6, type: 444 },
  timezone: 5,
  visibility: 4,
  weather: [],
  wind: { deg: 30, speed: 40 },
};

const mappedData = {
  lon: 2,
  lat: 1,
  main: {
    feels_like: 1,
    humidity: 90,
    pressure: 20,
    temp: 21,
    temp_max: 22,
    temp_min: 25,
  },
  description: '',
  temp: 21,
  feels_like: 1,
  temp_min: 25,
  temp_max: 22,
  pressure: 20,
  humidity: 90,
};

describe('ResponseMapper', () => {
  it('should map weatherMapAPI response to weather response', () => {
    expect(responseMapper(stubData)).toMatchObject(mappedData);
  });
});
