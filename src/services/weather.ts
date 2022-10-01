import * as moment from 'moment';

export const getWeather = async (payload: unknown): Promise<unknown> => {
  console.log(payload)
  return moment();  
};
