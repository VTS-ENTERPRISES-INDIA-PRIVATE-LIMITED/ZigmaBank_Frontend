import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt, faFileInvoiceDollar, faExchangeAlt, faUser, faBell, faCreditCard, faSignOutAlt, faEnvelope, faCog, faQuestionCircle,faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
  return (
    <div>
      <header className="header">
          <h2>Welcome, UserName</h2>
         <div className="search-bar-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Search..." 
            />
          </div>
          <div className="top-icons">
            <FontAwesomeIcon icon={faEnvelope} className="top-icon" />
            <FontAwesomeIcon icon={faCog} className="top-icon" />
            <FontAwesomeIcon icon={faQuestionCircle} className="top-icon" />
            <FontAwesomeIcon icon={faSignOutAlt} className="top-icon" />
          </div>
        </header>
    </div>
  )
}

export default Header
