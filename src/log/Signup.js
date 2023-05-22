import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import logo from '../ressources/Logo.png'; // Replace with the actual path to your logo image
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signup-page">
        <div className='signup'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1>Create account</h1>
      <h5>use your gmail account for registration</h5>
      <button className="google-button">
        <FontAwesomeIcon icon={faGoogle} />
      </button>
      </div>
      <div className='already-registered'>
        <h1>Welcome back!</h1>
        <h5>to keep connected with us please connect using your email adress</h5>
        <Link to='/login'><button>Sign in</button></Link>
      </div>
    </div>

  );
}

export default Signup;

