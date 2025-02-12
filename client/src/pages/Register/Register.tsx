import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Components/Form/Form';
import FormTitle from '../Components/FormTitle/FormTitle';
import { useAppVM } from './RegisterVM';


function Register() {
  const { registerUser, error } = useAppVM();
  const [formData, setFormData] = useState({ email: '', fullName: '', password: '' });
  const navigate = useNavigate();

  const loginFields = [
    { name: "email", type: "email" ,placeholder: "Email"},
    { name: "Full Name", type: "text" ,placeholder: "full name"},
    { name: "password", type: "password", placeholder: "Password"},
  ];
  const handleLogin = (data: Record<string, string>) => {
    async (data: Record<string, string>) => {
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
      <FormTitle title='Register'></FormTitle>
      <Form fields={loginFields} buttonLabel='Submit' onSubmit={handleLogin}></Form>
    </div>
  );
}
}
export default Register;
