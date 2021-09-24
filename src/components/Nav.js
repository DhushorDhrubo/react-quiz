import React from 'react';
import logo from '../assests/logo.png';
import '../styles/Nav.css';
import Account from './Account';

function Nav() {
    return (
        <div>
           <nav className='nav'>
      <ul>
        <li>
          <a href="index.html" className='brand'>
            <img src={logo} alt="Quiz logo" />
            <h3>Quiz App</h3>
          </a>
        </li>
      </ul>
<Account/>
    </nav>

        </div>
    )
}

export default Nav
