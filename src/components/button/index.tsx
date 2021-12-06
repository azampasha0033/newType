/* eslint-disable no-unused-vars */
import { FC, MouseEvent } from 'react';

interface IButtonProps {
  title: string;
  handleSubmit?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButtonProps> = ({ title, handleSubmit }: IButtonProps) => (
  <>
    <button onClick={handleSubmit} type="button">
      {title}
    </button>
  </>
);

export default Button;
