import React from 'react';
import logo from '../assests/logo.png';
import '../styles/Nav.css';
import Account from './Account';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
           <nav className='nav'>
      <ul>
        <li>
          <Link to="/" className='brand'>
            <img src={logo} alt="Quiz logo" />
            <h3>Quiz App</h3>
          </Link>
        </li>
      </ul>
<Account/>
    </nav>

        </div>
    )
}

export default Nav
