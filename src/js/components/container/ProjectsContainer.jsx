import React, { Component } from "react";
import * as sectionStyles from './Section.module.scss';
import styles from './Projects.module.scss';

const ProjectsContainer = ({projects}) => {

  const formattedProjects = projects.map(project => {
    return (<article key={project.name} className={styles.project}>
      <div className={styles.header}>
        <div className={styles.leftCol}>
          <a href={project.link} target="_blank"><span className={styles.link}>{project.name}</span></a>
        </div>
        <div className={styles.rightCol}>
          <p>{project.start_date} - {project.end_date}</p>
        </div>
      </div>
      <p className={styles.stack}>Stack: {project.stack}</p>
      <p className={styles.description}>{project.description}</p>
    </article>)
  });

  return (
    <div className={sectionStyles.sectionContainer}>
      <p className={sectionStyles.sectionTitle}>Projects</p>
      <div className={styles.container}>
        {formattedProjects}
      </div>
    </div>
  )
}

export default ProjectsContainer;
