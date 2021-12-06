/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
export const isObjectEmpty = (obj: any): boolean => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
