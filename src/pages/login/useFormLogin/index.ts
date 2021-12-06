/* eslint-disable no-undef */
import { ChangeEvent, useCallback, useRef, useState, MouseEvent } from 'react';
import {
  ILoginFormInitialValue,
  validateInputForm,
  ILoginFormErrorsInitialValue
} from './helper';
import { ILoginFormType, ILoginFormErrors } from './types';
import { isObjectEmpty } from '../../../general/helper';

const useFormLogin = () => {
  const [inputData, setInputData] = useState<ILoginFormType>(
    ILoginFormInitialValue
  );
  const [errors, setErrors] = useState<ILoginFormErrors>(
    ILoginFormErrorsInitialValue
  );
  const userNameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  const handleChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
    },
    [inputData]
  );

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const validateErrors = validateInputForm(inputData);
      setErrors(validateErrors);
      isObjectEmpty(validateErrors);
      // && dispatch(updateBankInfo(inputData))
    },
    [inputData]
  );
  return {
    handleChanged,
    userNameField,
    passwordField,
    inputData,
    handleSubmit,
    errors
  };
};
export default useFormLogin;
