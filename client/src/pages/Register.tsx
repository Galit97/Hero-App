import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ email: '', fullName: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registering:', formData);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="text" placeholder="Full Name" required onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
      <input type="password" placeholder="Password" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}
export default Register;
