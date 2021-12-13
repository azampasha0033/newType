import { memo } from 'react';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import Input from '../../components/input';
import Button from '../../components/button';
import useFormLogin from './useFormLogin';

const LoginView = memo(() => {
  const { handleChanged, userNameField, passwordField, handleSubmit, errors } =
    useFormLogin();
  const { username, password } = errors;
  return (
    <div>
      <Input
        ref={userNameField}
        value={userNameField && userNameField.current?.value}
        name="username"
        handleChange={handleChanged}
        placeholder="User Name"
        prefixed={<UserOutlined />}
      />
      {username && <small>{username}</small>}
      <Input
        ref={passwordField}
        value={passwordField && passwordField.current?.value}
        name="password"
        handleChange={handleChanged}
        placeholder="Password"
        prefixed={<UnlockOutlined />}
      />
      {password && <small>{password}</small>}

      <Button handleSubmit={handleSubmit} title="submit" />
    </div>
  );
});
export default LoginView;
