import { useNavigate } from 'react-router-dom';
import Form from '../Components/Form/Form';
import FormTitle from '../Components/FormTitle/FormTitle';
import { useAppVM } from './RegisterVM';

function Register() {
  const { registerUser, error } = useAppVM();
  const navigate = useNavigate();

  const loginFields = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "fullName", type: "text", placeholder: "Full Name" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  const handleLogin = async (data: Record<string, string>) => {
    console.log("Form Data:", data);

    const response = await registerUser({
      email: data.email,
      fullName: data.fullName,
      password: data.password,
    });

    if (response.success) {
      alert(response.message);
      navigate('/login');
    } else {
      console.error(response.error);
    }
  };

  return (
    <div>
      <FormTitle title='Register' />
      <Form fields={loginFields} buttonLabel='Submit' onSubmit={handleLogin} />
    </div>
  );
}

export default Register;
