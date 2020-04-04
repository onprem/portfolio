import React from "react";
import StackIcons from './StackIcons';
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, description, image, url, stacks }) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          <h2 className={styles.title}>{title}</h2>
        </a>
        <p className={styles.description}>{description}</p>
        <span>
          <StackIcons stacks={stacks} className={styles.icon} />
        </span>
      </div>
      <a href={url} target="_blank" rel="noreferrer noopener" className={styles.right}>
        <img src={image} className={styles.image} alt={title} />
        <span className={styles.open}>OPEN</span>
      </a>
    </div>
  );
};

export default ProjectCard;
