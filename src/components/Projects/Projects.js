import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

import projects from "../../data/projects";

const Projects = () => {
  return (
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
  );
};

export default Projects;
