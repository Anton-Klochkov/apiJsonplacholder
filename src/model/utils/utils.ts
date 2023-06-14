import { AxiosError } from 'axios';

export type GetErrorMessage = AxiosError<any>;

export const getErrorMessage = (error: unknown) => {
  const message =
    (error as GetErrorMessage)?.response?.data?.error.message ||
    (error as GetErrorMessage).message ||
    'Ошибка запроса';

  return message;
};
