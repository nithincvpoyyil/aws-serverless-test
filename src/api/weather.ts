import { WeatherMapAPIResponse } from '../@types';
import { HttpClient } from '../utils';
import { DEFAULT_COUNTRY_CODE } from './constants';


/**
 * Weather Controller Class
 *
 * @export
 * @class WeatherController
 */
export class WeatherController {
  constructor(
    private httpClient: HttpClient = new HttpClient(
      process.env.WEATHER_API_BASE_URL,
    ),
  ) {}

  /**
   * Returns weather data information from weather map APIs
   *
   * @param {string} postCode
   * @param {*} [countryCode=DEFAULT_COUNTRY_CODE]
   * @returns {Promise<WeatherMapAPIResponse>}
   * @memberof WeatherController
   */
  public async getWeatherByPostCode(
    postCode: string,
    countryCode = DEFAULT_COUNTRY_CODE,
  ): Promise<WeatherMapAPIResponse> {
    try {
      const weatherMapAPIHTTPResponse = await this.httpClient.get<WeatherMapAPIResponse>(
        '/weather',
        {
          zip: `${postCode},${countryCode}`,
          appid: process.env.OPEN_WEATHERMAP_API_KEY,
        },
      );
     
      return weatherMapAPIHTTPResponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
