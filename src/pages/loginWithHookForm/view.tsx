import { memo } from 'react';

import { useForm } from 'react-hook-form';

const LoginHookFormView = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onsubmit = (data: any) => {
    console.info(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input
          style={{ width: '100%' }}
          type="text"
          {...register('name', {
            required: 'Please enter your user name',
            minLength: {
              value: 10,
              message: 'minimum value 10'
            }
          })}
        />
        {errors.name && (
          <small style={{ color: 'red' }}>{errors.name.message}</small>
        )}
        <input
          style={{ width: '100%' }}
          type="text" // we have add pattern below so there is no need to type no.
          {...register('age', {
            required: 'Please enter your age',
            pattern: {
              value: /^[0-9]*$/,
              message: 'only number are allowed'
            }
          })}
        />
        {errors.age && (
          <small style={{ color: 'red' }}>{errors.age.message}</small>
        )}
        <br />
        <button type="submit">submit </button>
      </form>
    </div>
  );
});
export default LoginHookFormView;
