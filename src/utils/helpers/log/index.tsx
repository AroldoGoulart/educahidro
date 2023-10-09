/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable  */

export const logOnDev = (message?: any, ...optionalParams: any[]) => {
  if (__DEV__) {
    console.log(message, ...optionalParams);
  }
};
