import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { userValidator } from '../../validators/user.validator';

import styles from './RegisterForm.module.css';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({ mode: 'all', resolver: joiResolver(userValidator) });

  function handleRegister(user) {
    console.log(user);
    reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleRegister)}>
      <label className={styles.label}>
        <span>User name:</span>
        <input type='text' {...register('username')} />
      </label>
      {errors.username && (
        <span style={{ color: 'red' }}>{errors.username.message}</span>
      )}

      <label className={styles.label}>
        <span>Password:</span>
        <input type='password' {...register('password')} />
      </label>
      {errors.password && (
        <span style={{ color: 'red' }}>{errors.password.message}</span>
      )}

      <button className={styles.btn} type='submit' disabled={!isValid}>
        REGISTER
      </button>
    </form>
  );
}

export default RegisterForm;
