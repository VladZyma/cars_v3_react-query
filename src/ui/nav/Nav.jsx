import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
