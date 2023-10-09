import axios from 'axios';

import { logOnDev } from '@/utils/helpers/log';

export const BrazilAPI = axios.create({
  baseURL: `https://brasilapi.com.br/api/`,
  timeout: 1000 * 60 * 5,
  headers: {
    'Content-Type': `application/json`,
  },
});

// add debug layer
BrazilAPI.interceptors.request.use((config) => {
  // log request url
  logOnDev(`Request URL: ${config.url}`);
  return config;
});

BrazilAPI.interceptors.response.use((response) => {
  // url
  logOnDev(`Response URL: ${response.config.url}`);
  // log response data
  logOnDev(`Response Data: ${JSON.stringify(response.data, null, 2)}`);
  return response;
});
