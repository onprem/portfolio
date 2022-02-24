import React, { useState, useEffect } from "react";
import ProjectCard from "Components/ProjectCard/ProjectCard";
import GitHubCard from 'Components/GitHubCard/GitHubCard';
import styles from "./Projects.module.css";

import projects from "Data/projects";

const GitHubProjects = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then(res => res.json())
    .then(res => {
      setRepos(res.filter(r => !r.fork));
    });
  }, [username])

  const cards = repos.map(r => <GitHubCard repo={r} />);
  return (
    <div className={styles.githubCards}>
      {cards}
    </div>
  );
};

const Projects = () => {
  return (
    <>
    <section className={styles.projects}>
      <h1 className={styles.projectHeading}>Featured Projects</h1>
      {projects.map((p) => (
        <ProjectCard
          title={p.title}
          description={p.description}
          image={p.image}
          url={p.url}
          stacks={p.stacks}
          key={p.url}
        />
      ))}
    </section>
    <section className={styles.githubProjects}>
      <h1 className={styles.githubHeading}>GitHub Projects</h1>
      <GitHubProjects username="onprem" />
    </section>
    </>
  );
};

export default Projects;
