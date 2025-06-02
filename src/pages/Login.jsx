import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add authentication logic here if needed
    navigate('/dashboard'); // Redirect to /dashboard
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="login-box">
        <h2>ENTER YOUR EMAIL ADDRESS</h2>
        <input type="email" placeholder="Email" />
        <h2>ENTER YOUR PASSWORD</h2>
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;