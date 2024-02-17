import LoginForm from '../features/login-form/LoginForm';

function LoginPage() {
  return (
    <div
      style={{
        paddingTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoginForm />
    </div>
  );
}

export default LoginPage;
