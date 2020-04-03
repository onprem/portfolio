import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, description, image, url }) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          <h2 className={styles.title}>{title}</h2>
        </a>
        <p className={styles.description}>{description}</p>
      </div>
      <a href={url} target="_blank" rel="noreferrer noopener" className={styles.right}>
        <img src={image} className={styles.image} alt={title} />
        <span className={styles.open}>OPEN</span>
      </a>
    </div>
  );
};

export default ProjectCard;
