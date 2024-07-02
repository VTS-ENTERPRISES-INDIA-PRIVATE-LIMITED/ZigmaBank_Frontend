import React, { useEffect } from 'react';
import './Fundtransfer.css';

const Fundtransfer = () => {
  useEffect(() => {
    localStorage.setItem("loading", "false");
  }, []);

  return (
    <div className="Funds-container">
      <hr className="horizontal-line" />
      <form className="funds-form">
        <div className="form-item">
          <label className='label' htmlFor="accountNumber">Account Number</label>
          <input type="text" id="accountNumber" placeholder="Enter Recipient Account Number" required />
        </div>
        <div className="form-item">
          <label className='label' htmlFor="ifscCode">IFSC Code</label>
          <input type="text" id="ifscCode" placeholder="Enter IFSC Code" required />
        </div>
        <div className="form-item">
          <label className='label' htmlFor="amount">Amount</label>
          <input type="text" id="amount" placeholder="Enter Amount" required />
        </div>
        <div className="form-item">
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
}

export default Fundtransfer;
