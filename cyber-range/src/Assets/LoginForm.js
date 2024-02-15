import React, { /*useEffect*/ useState } from "react";
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Login successful', data);
        // Redirect to Home page
        navigate('/home');
      } else {
        console.error('Login failed', data.message);
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3"><span>Log In </span><span>Ask Us</span></h6>
              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                      <form onSubmit={handleSubmit}>
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input type="email" className="form-style" placeholder="Email" value={email} onChange={handleEmailChange}/>
                            <i className="input-icon uil uil-at"></i>
                          </div>  
                          <div className="form-group mt-2">
                            <input 
                              type="password" 
                              className="form-style" 
                              placeholder="Password"
                              value={password}
                              onChange={handlePasswordChange} 
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button type="submit" className="btn mt-4">Login</button>
                          {errorMessage && <div className="error-message">{errorMessage}</div>}
                          <p className="mb-0 mt-4 text-center"><a href="#forgot" className="link">Forgot your password?</a></p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-3 pb-3">Request Access</h4>
                        <div className="form-group">
                          <input type="text" className="form-style" placeholder="Full Name" />
                          <i className="input-icon uil uil-user"></i>
                        </div>   
                        <div className="form-group mt-2">
                          <input type="email" className="form-style" placeholder="Email" />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <textarea
                            className="form-style"
                            placeholder="Your message here..."
                            rows="4" // Specifies the initial number of rows
                            value={message}
                            onChange={handleMessageChange}
                            style={{ resize: 'none' }}
                          ></textarea>
                          <i className="input-icon uil uil-message" style={{ top: '10px' }}></i> {/* Adjust icon position as needed later whenever */}
                        </div>
                        <a href="Placeholder" className="btn mt-4">Send</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
