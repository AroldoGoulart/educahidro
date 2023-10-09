import { getUniqueId } from 'react-native-device-info';
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { signOut } from '@/contexts/auth';
import { logOnDev } from '@/utils/helpers/log';
import { generateUUID } from '@/utils/helpers/math';
import { getItem, keys } from '@/utils/storage';

// Response Interceptors
const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config;
  const { status } = response;

  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);

  return response;
};

const onResponseError = (error: AxiosError) => {
  const { message } = error;
  const { method, url } = error.config as AxiosRequestConfig;
  const { status } = (error.response as AxiosResponse) ?? {};

  if (status === 403) signOut();

  if (axios.isAxiosError(error)) {
    logOnDev(
      `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`,
    );
    return Promise.reject(error);
  }

  logOnDev(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${message}`);
  // Log response
  logOnDev(
    `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${JSON.stringify(
      error,
      null,
      2,
    )}`,
  );

  return Promise.reject(error);
};

// Request Interceptors
const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig<never>> => {
  const { method, url, headers } = config;

  logOnDev(`🚀 [API] ${config.baseURL}${url} | Request`);
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);
  // If POST, log params
  logOnDev(
    `🚀 [API] ${method?.toUpperCase()} ${url} | Request ${JSON.stringify(
      config.data,
      null,
      2,
    )}`,
  );

  headers[`x-correlation-id`] = generateUUID();

  if (true) {
    const curlCommand = [
      `curl -X ${method?.toUpperCase()}`,
      `${config.baseURL}${url}`,
      ...Object.keys(headers).map(
        (key) => `-H '${key}: ${headers[key as keyof typeof headers]}'`,
      ),
      `-d '${JSON.stringify(config.data, null, 2)}'`,
    ].join(' ');

    logOnDev(curlCommand);
  }

  return { ...config, headers };
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  const { message } = error;
  const { method, url } = error.config as AxiosRequestConfig;
  logOnDev(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${message}`);
  return Promise.reject(error);
};

// Interceptor Setup
export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
};
