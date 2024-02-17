import RegisterForm from '../features/register-form/RegisterForm';

function RegisterPage() {
  return (
    <div
      style={{
        paddingTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
