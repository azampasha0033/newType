/* eslint-disable no-alert */
/* eslint-disable no-undef */
import {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  MouseEvent,
  useEffect
} from 'react';
import {
  ILoginFormInitialValue,
  validateInputForm,
  ILoginFormErrorsInitialValue
} from './helper';
import { ILoginFormType, ILoginFormErrors } from './types';
import { isObjectEmpty } from '../../../general/helper';
import { Login } from '../../../redux/features/loginSlice/apiActions';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const useFormLogin = () => {
  const [inputData, setInputData] = useState<ILoginFormType>(
    ILoginFormInitialValue
  );
  const [errors, setErrors] = useState<ILoginFormErrors>(
    ILoginFormErrorsInitialValue
  );
  const userNameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  // const dispatch = useAppDispatch();
  const handleChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
    },
    [inputData]
  );
  const dispatch = useAppDispatch();
  const { message, success } = useAppSelector((state) => state.login);

  useEffect(() => {
    if (success) {
      alert(message);
    }
    if (!success && message) {
      alert(message);
    }
  }, [message, success]);

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setErrors({ password: '', username: '' });
      const validateErrors = validateInputForm(inputData);
      setErrors(validateErrors);
      isObjectEmpty<typeof validateErrors>(validateErrors) &&
        dispatch(Login(inputData));
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
