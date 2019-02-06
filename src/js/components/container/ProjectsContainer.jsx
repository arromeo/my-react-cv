import React, { Component } from "react";
import * as sectionStyles from './Section.module.scss';

const ProjectsContainer = ({projects}) => {

  const formattedProjects = projects.map(project => {
    return (<article key={project.name} className="project">
      <div className="project-header">
        <div className="project-left-col">
          <a href={project.link} target="_blank"><span className="project-link">{project.name}</span></a>
        </div>
        <div className="project-right-col">
          <p>{project.start_date} - {project.end_date}</p>
        </div>
      </div>
      <p className="project-stack">Stack: {project.stack}</p>
      <p className="project-description">{project.description}</p>
    </article>)
  });

  return (
    <div className={sectionStyles.sectionContainer}>
      <p className={sectionStyles.sectionTitle}>Projects</p>
      <div className="projects-container">
        {formattedProjects}
      </div>
    </div>
  )
}

export default ProjectsContainer;
