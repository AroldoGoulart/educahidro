import { type AxiosError } from 'axios';

type RawError = {
  error?: {
    code: number;
    http_code?: number;
    message: string;
    detail?: {
      message: string;
    };
  };
  Message?: string;
};

export type BFFError = AxiosError<RawError>;

type DefaultResponse<Data> = {
  data: Data;
};

export type RawResponse<Data> = DefaultResponse<Data>;
