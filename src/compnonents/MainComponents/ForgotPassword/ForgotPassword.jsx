import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/clientlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Instructions to reset your password have been sent to your email.');
      } else {
        setMessage('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='main'>
    <div className="forgot-password-container">
      <div className="illustration-section">
        <img src="https://res.cloudinary.com/dsbuzlxpw/image/upload/v1719228586/otj7izokpdsdcnkbt21x.avif" alt="Forgot Password Illustration" className="illustration-image" />
      </div>
      <div className="form-section">
        <h2>Forgot Your Password?</h2>
        <p>Enter your email address and we will send you instructions to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address"
              className="email-input"
            />
          </div>
          <button type="submit" className="reset-button">Reset Password</button>
        </form>
        <a href="/login" className="back-to-login">Back to signin</a>
        {message && <p className="message">{message}</p>}
      </div>
      </div>
      </div>
  );
};

export default ForgotPassword;
