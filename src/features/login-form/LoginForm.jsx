import { useForm } from 'react-hook-form';

import styles from './LoginForm.module.css';

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({ mode: 'all' });

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
      <label className={styles.label}>
        Password:
        <input type='password' {...register('password')} />
      </label>

      <button className={styles.btn} type='submit'>
        LOGIN
      </button>
    </form>
  );
}

export default LoginForm;
