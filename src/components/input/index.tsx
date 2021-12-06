/* eslint-disable no-unused-vars */
/* eslint-disable no-unneeded-ternary */
import { FC, ReactNode, ChangeEvent } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { InputContainer } from './index.styled';

interface IInputProps {
  prefixed?: ReactNode;
  placeholder?: string;
  size?: SizeType;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  ref?: any;
  value?: string;
  name?: string;
}

const CustomizedInput: FC<IInputProps> = ({
  prefixed,
  placeholder,
  size,
  handleChange,
  ref,
  value,
  name
}: IInputProps) => (
  <InputContainer>
    <Input
      size={size ? size : 'large'}
      placeholder={placeholder}
      prefix={prefixed}
      onChange={handleChange}
      ref={ref}
      value={value}
      name={name}
    />
  </InputContainer>
);

export default CustomizedInput;
