import React from "react";
import { ReactComponent as GitHubIcon } from "Assets/github.svg";
import { ReactComponent as TwitterIcon } from "Assets/twitter.svg";
import { ReactComponent as LinkedinIcon } from "Assets/linkedin.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <h2 className={styles.title}>Web Developer</h2>
        <div className={styles.location}>
          <span>From</span>
          <span className={styles.city}>BENGALURU</span>
        </div>
      </div>
      <div className={styles.right}>
        <a
          href="https://github.com/onprem"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon className={styles.socialIcon} />
        </a>
        <a
          href="https://twitter.com/onprem_"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon className={styles.socialIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/onprem"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedinIcon className={styles.socialIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
