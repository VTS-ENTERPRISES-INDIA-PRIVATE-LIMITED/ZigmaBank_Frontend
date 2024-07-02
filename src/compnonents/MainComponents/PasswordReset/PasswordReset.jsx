import React from 'react';
import './ResetPassword.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {  Input } from 'antd';


const PasswordReset = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="password-reset-container">
      <div className="illustration">
        <img src="https://res.cloudinary.com/dsbuzlxpw/image/upload/v1719228808/gdl9frdysaavzwpd4s21.png" alt="Key Carriers" className="illustration-img" />
      </div>
      <div className="form-section">
        <h2> Reset Your Password</h2>
        <form>
         <center> <div className="input-group">
            <Input.Password style={{ width: "70%", height: "10%"}} type="password" name="password" required placeholder="Enter Password" />
      
          </div>
          <div className="input-group">
            <Input.Password style={{ width: "70%"}} type="password" name="password" required placeholder="Enter Confirm Password" />
      
          </div></center>
          <center><button type="submit" className='reset-button'>Change</button></center>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
