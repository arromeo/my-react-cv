import React, { Component } from "react";

const ProjectsContainer = ({projects}) => {

  const formattedProjects = projects.map(project => {
    return (<article key={project.name} className="project">
      <div className="project-header">
        <div className="project-left-col">
          <p>{project.name}</p>
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
    <div className="section-container">
      <p className="section-title">Projects</p>
      <div className="projects-container">
        {formattedProjects}
      </div>
    </div>
  )
}

export default ProjectsContainer;