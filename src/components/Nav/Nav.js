import React from 'react';
import {ReactComponent as RingIcon} from '../../assets/ring.svg';
import {ReactComponent as ThemeIcon} from '../../assets/theme.svg';
import { Link } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = ({ setLight }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <RingIcon className={styles.ring} />
        <Link to="/">HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className={styles.right}>
        <button type="button" className={styles.toggle} onClick={() => setLight(l => !l)}>
          <ThemeIcon className={styles.themeIcon} />
        </button>
        <div className={styles.name}>
          <span className={styles.first}>PREM</span>
          <span className={styles.last}>SARASWAT</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
