import axios from 'axios';

import { BASE_URL } from '@/utils/constants';

import { setupInterceptors } from './interceptors';

export const API = axios.create({
  baseURL: `${BASE_URL}/`,
  timeout: 1000 * 60 * 5,
  headers: {
    'Content-Type': `application/json`,
  },
});

setupInterceptors(API);
