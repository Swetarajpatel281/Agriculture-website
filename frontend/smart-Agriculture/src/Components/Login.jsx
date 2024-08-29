import { useState } from 'react';
import './Styles/Login.css'
import { IoClose } from "react-icons/io5";
const Login = ({ isActive, closeLoginForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for form submission, such as API call, form validation, etc.
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
   <div className={`login-form-container ${isActive ? 'active' : ''}`}>
      {/* <button className="close-btn" onClick={closeLoginForm}>&times;</button> */}
      <IoClose className="close-btn" onClick={closeLoginForm}/>
     
      <form onSubmit={handleSubmit}>
        <h3>LOG IN</h3>

        <label>
          <span>Username</span>
          <input
            type="email"
            required
            className="box"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            required
            className="box"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="checkbox">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <input type="submit" value="Log in" className="btn" />

        <p>
          Forgot password? <a href="/">Click here</a>
        </p>
        <p>
          Don't have an account? <a href="/" id="create-btn">Create one</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
