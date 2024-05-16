import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
