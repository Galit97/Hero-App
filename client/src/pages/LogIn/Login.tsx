import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import FormTitle from '../Components/FormTitle/FormTitle';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className={styles.registerContainer}> 
    <form className={styles.registerForm} onSubmit={handleLogin}>
    <FormTitle title="Log In" navRoute="/"></FormTitle>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p>Don't have an account? <a href="/register">Click here</a></p>
    </form>
    </div>
  );
}
export default Login;
