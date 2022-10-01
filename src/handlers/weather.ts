import { returnErrorResponse, returnResponse } from './return';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { WeatherController } from '../api';
import { HttpException, responseMapper } from '../utils';
import { ResponseErrorMessages } from '../api/constants';

const weatherController = new WeatherController();

export const getWeather = async (event: APIGatewayProxyEvent) => {
  const queryStringParams = event?.queryStringParameters;
  try {
    const postCode = queryStringParams.zip;
    const countryCode = queryStringParams.countryCode;

    if (!postCode || !Number.isFinite(postCode)) {
      throw new HttpException(ResponseErrorMessages.PARAMS_MISSING, 400);
    }
    const weatherMapAPIData = await weatherController.getWeatherByPostCode(
      postCode,
      countryCode,
    );
    const weatherMapResponse = responseMapper(weatherMapAPIData);
    return returnResponse(weatherMapResponse);
  } catch (error) {
    const statusCode = error.statusCode || 400;
    const message = error?.message;
    return returnErrorResponse(statusCode, message, error);
  }
};

export const handler = getWeather;
