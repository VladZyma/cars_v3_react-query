import { useForm } from 'react-hook-form';

import styles from './RegisterForm.module.css';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({ mode: 'all' });

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
      <label className={styles.label}>
        <span>Password:</span>
        <input type='password' {...register('password')} />
      </label>

      <button className={styles.btn} type='submit'>
        REGISTER
      </button>
    </form>
  );
}

export default RegisterForm;
