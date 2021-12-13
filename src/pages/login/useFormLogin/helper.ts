import { ILoginFormType, ILoginFormErrors } from './types';
import { isEmpty } from '../../../general/validations';

export const ILoginFormInitialValue: ILoginFormType = {
  username: '',
  password: ''
};

export const ILoginFormErrorsInitialValue: ILoginFormErrors = {
  username: '',
  password: ''
};

export const validateInputForm = (inputData: ILoginFormType) => {
  const errors: Partial<ILoginFormErrors> = {};
  const { username, password } = inputData;

  if (isEmpty(username)) {
    errors.username = 'Please enter your username';
  }

  if (isEmpty(password)) {
    errors.password = 'Please enter your password';
  }

  return errors as ILoginFormErrors;
};
