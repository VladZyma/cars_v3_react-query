import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { userValidator } from '../../validators/user.validator';
import { oauthService } from '../../services/oauth.service';

import styles from './LoginForm.module.css';

function LoginForm() {
  const [apiError, setApiError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({ mode: 'all', resolver: joiResolver(userValidator) });

  const navigate = useNavigate();

  async function handleLogin(user) {
    try {
      const { data } = await oauthService.login(user);

      oauthService.setAccessTokenKeys(data);
      setApiError(null);
      navigate('/cars');
    } catch (error) {
      setApiError(error.response?.data.detail);
      reset();
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
      {apiError && <span style={{ color: 'red' }}>{apiError}</span>}
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
