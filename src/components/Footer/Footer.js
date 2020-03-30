import React from "react";
import { ReactComponent as GitHubIcon } from "../../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <h2 className={styles.title}>Web Developer</h2>
        <div className={styles.location}>
          <span>From</span>
          <span className={styles.city}>BIKANER</span>
        </div>
      </div>
      <div className={styles.right}>
        <a
          href="https://github.com/prmsrswt"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon className={styles.socialIcon} />
        </a>
        <a
          href="https://twitter.com/prmsrswt"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon className={styles.socialIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/prmsrswt"
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
