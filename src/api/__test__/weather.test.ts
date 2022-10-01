import { HttpClient } from "../../utils";
import { WeatherController } from "../weather";

describe('WeatherController', () => {
  it('should call weather map API with parameters', () => {
    //@ts-ignore
    const Mock = jest.fn<HttpClient>(() => ({
        get: jest.fn(),
    }));
    const mock = new Mock();
    const instance = new WeatherController(mock);
    instance.getWeatherByPostCode('2000','au');
    expect(mock.get).toHaveBeenCalled();
  });
});
