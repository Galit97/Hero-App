import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Components/Form/Form';
import FormTitle from '../Components/FormTitle/FormTitle';

function Register() {
  const [formData, setFormData] = useState({ email: '', fullName: '', password: '' });
  const navigate = useNavigate();

  const loginFields = [
    { name: "email", type: "email" ,placeholder: "Email"},
    { name: "Full Name", type: "text" ,placeholder: "full name"},
    { name: "password", type: "password", placeholder: "Password"},
  ];
  const handleLogin = (data: Record<string, string>) => {
    console.log(data);
    navigate('/dashboard');
  };


  return (
    <div>
      <FormTitle title='Register'></FormTitle>
      <Form fields={loginFields} buttonLabel='Submit' onSubmit={handleLogin}></Form>
    </div>
//     <div className={styles.registerContainer}> 
//     <form className={styles.registerForm} onSubmit={handleSubmit}>
//     <FormTitle title="Register" navRoute="/"></FormTitle>
//         <input type="email" placeholder="Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//         <input type="text" placeholder="Full Name" required onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
//         <input type="password" placeholder="Password" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
//         <button type="submit">Register</button>
//     </form>
// </div>
  );
}
export default Register;
