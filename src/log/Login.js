import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import logo from '../ressources/Logo.png'; // Replace with the actual path to your logo image
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-page">
        <div className='login'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1>Login to your account</h1>
      <h5>Login using your google account</h5>
      <button className="google-button">
        <FontAwesomeIcon icon={faGoogle} />
      </button>

      </div>
      <div className='new-user'>
        <h1>New here?</h1>
        <h5>Sign up and discover a great amount of new opportunities</h5>
        <Link to='/signup'><button>Sign up</button></Link>
      </div>
    </div>

  );
}

export default LoginPage;

