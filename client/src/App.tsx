import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Welcome to our site</h1>
      <div className="buttons">
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
      </div>
    </div>
  );
}
export default App;
