import React from "react";
import StackIcons from "Components/ProjectCard/StackIcons";

import { ReactComponent as StarIcon } from "Assets/star.svg";
import { ReactComponent as ForkIcon } from "Assets/fork.svg";

import styles from "./GitHubCard.module.css";

const GitHubCard = ({ repo }) => {
  const {
    html_url: url,
    description,
    stargazers_count: stars,
    forks_count: forks,
    name,
    language,
  } = repo;

  return (
    <div className={styles.card}>
      <a href={url} target="_blank" rel="noreferrer noopener" className={styles.url}>
        <h2 className={styles.heading}>{name}</h2>
        <StackIcons stacks={[language]} className={styles.icon} />
      </a>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a
          href={`${url}/stargazers`}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.lnkSpan}
        >
          <StarIcon className={styles.lnkIcon} /> {stars}
        </a>
        <a
          href={`${url}/fork`}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.lnkSpan}
        >
          <ForkIcon className={styles.lnkIcon} /> {forks}
        </a>
      </div>
    </div>
  );
};

export default GitHubCard;
