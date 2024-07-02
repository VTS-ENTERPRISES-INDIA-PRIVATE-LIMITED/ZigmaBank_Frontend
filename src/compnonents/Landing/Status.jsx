import React, { useEffect } from 'react';
import Starts from '../Images/status.png';
import './Status.css';

export default function Status() {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the value, the faster the counter

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className='stats'>
      <div className='stats-left'>
        <img src={Starts} alt="Stats" />
      </div>
      <div className='stats-counter'>
        <div className="stats-item">
          <span
            className="counter"
            data-target="350"
          >0</span>
          <p>
            <strong>Employs</strong> 
          </p>
        </div>
        <div className="stats-item">
          <span
            className="counter"
            data-target="100"
          >0</span>
          <p>
            <strong>Projects</strong> Completed projects ensure success
          </p>
        </div>
        <div className="stats-item">
          <span
            className="counter"
            data-target="453"
          >0</span>
          <p>
            <strong>Hours Of Support</strong> Adequate support ensures efficiency
          </p>
        </div>
      </div>
    </div>
  );
}
