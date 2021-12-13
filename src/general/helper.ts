/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
export const isObjectEmpty = <T extends object>(obj: T): boolean => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
