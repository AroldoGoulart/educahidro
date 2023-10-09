import axios, { type AxiosResponse } from 'axios';

import { logOnDev } from '../log';
import { type RawResponse } from './types';

export default function parseResponseData<T>(
  response: AxiosResponse<RawResponse<T>> | AxiosResponse<T>,
): T {
  if (
    typeof response.data === `object` &&
    !!response.data &&
    `data` in response.data
  ) {
    return response.data.data;
  }

  return response.data;
}

// Bearer Token Functions
export const addBearerToken = (token: string) => {
  logOnDev(`✅ [API] Add Bearer Token ${token}`);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const resetBearerToken = () => {
  logOnDev(`✅ [API] Reset Bearer Token`);
  axios.defaults.headers.common.Authorization = '';
};

export const addDeviceIdHeader = (id: string) => {
  logOnDev(`✅ [API] Add Device Id ${id}`);
  axios.defaults.headers.common[`X-Device-Id`] = id;
};
