import {  useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import Form from '../Components/Form/Form';
import FormTitle from '../Components/FormTitle/FormTitle';

function Login() {
  const navigate = useNavigate();
  
  const loginFields = [
    { name: "email", type: "email" ,placeholder: "Email"},
    { name: "password", type: "password", placeholder: "Password"},
  ];
  const handleLogin = (data: Record<string, string>) => {
    console.log(data);
    navigate('/dashboard');
  };

  return (
    <div>
    <FormTitle title="Log In" navRoute="/" />
    <Form fields={loginFields} buttonLabel="submit" onSubmit={handleLogin} />
    <p>Don't have an account? <a href="/register">Click here</a></p>
  </div>

    // <div className={styles.registerContainer}> 
    // <form className={styles.registerForm} onSubmit={handleLogin}>
    // <FormTitle title="Log In" navRoute="/"></FormTitle>
    //   <input type="email" placeholder="Email" required />
    //   <input type="password" placeholder="Password" required />
    //   <button type="submit">Login</button>
    //   <p>Don't have an account? <a href="/register">Click here</a></p>
    // </form>
    // </div>
  );
}
export default Login;
