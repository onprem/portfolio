import React from 'react';
import {ReactComponent as RingIcon} from '../../assets/ring.svg';
import { Link } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <RingIcon className={styles.ring} />
        <Link to="/">HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className={styles.right}>
        <span className={styles.first}>PREM</span>
        <span className={styles.last}>SARASWAT</span>
      </div>
    </nav>
  );
};

export default Nav;
