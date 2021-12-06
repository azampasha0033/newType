import { ILoginFormType, ILoginFormErrors } from './types';
import { isEmpty } from '../../../general/validations';

export const ILoginFormInitialValue: ILoginFormType = {
  userName: '',
  password: ''
};

export const ILoginFormErrorsInitialValue: ILoginFormErrors = {
  userName: '',
  password: ''
};

export const validateInputForm = (inputData: ILoginFormType) => {
  const errors: ILoginFormErrors = {
    userName: '',
    password: ''
  };
  const { userName, password } = inputData;

  if (isEmpty(userName)) {
    errors.userName = 'Please enter your username';
  }

  if (isEmpty(password)) {
    errors.password = 'Please enter your password';
  }

  return errors;
};
