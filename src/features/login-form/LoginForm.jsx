import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { userValidator } from '../../validators/user.validator';

import styles from './LoginForm.module.css';

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({ mode: 'all', resolver: joiResolver(userValidator) });

  function handleLogin(user) {
    console.log(user);
    reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
      <label className={styles.label}>
        User name:
        <input type='text' {...register('username')} />
      </label>
      {errors.username && (
        <span style={{ color: 'red' }}>{errors.username.message}</span>
      )}

      <label className={styles.label}>
        Password:
        <input type='password' {...register('password')} />
      </label>
      {errors.password && (
        <span style={{ color: 'red' }}>{errors.password.message}</span>
      )}

      <button className={styles.btn} type='submit' disabled={!isValid}>
        LOGIN
      </button>
    </form>
  );
}

export default LoginForm;
