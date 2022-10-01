import { WeatherMapAPIResponse, WeatherResponse } from '../@types';

/**
 * Mapper function to convert weather API data to custom weather response
 *
 * @export
 * @param {WeatherMapAPIResponse} apiResponse
 * @returns {WeatherResponse}
 */
export function responseMapper(
  apiResponse: WeatherMapAPIResponse,
): WeatherResponse {
  const { coord, weather, main } = apiResponse;

  const response: WeatherResponse = {
    lon: coord?.lon,
    lat: coord?.lat,
    main: main,
    description: (weather || []).map((i) => i.description).join(' '),
    temp: main?.temp,
    feels_like: main?.feels_like,
    temp_min: main?.temp_min,
    temp_max: main?.temp_max,
    pressure: main.pressure,
    humidity: main?.humidity,
  };

  return response;
}
