import { APIGatewayProxyResult } from 'aws-lambda';
export const returnResponse = (responseObject: any): APIGatewayProxyResult => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: responseObject,
  };
};

export const returnErrorResponse = (
  statusCode: number,
  message = 'error occured',
  additionalData: { [key: string]: string } = {},
): APIGatewayProxyResult => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: { message, ...additionalData },
  };
};
