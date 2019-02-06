import React, { Component } from "react";
import SummaryContainer from './SummaryContainer.jsx';
import ProjectsContainer from './ProjectsContainer.jsx';
import ExperienceContainer from './ExperienceContainer.jsx';
import EducationContainer from './EducationContainer.jsx';

import styles from './Body.module.scss';

const BodyContainer = ({summary, experience, education, projects}) => (
  <div className={styles.resumeBody}>
    <div className='column'>
      <SummaryContainer summary={summary} />
      <ExperienceContainer experience={experience} />
      <EducationContainer education={education} />
    </div>
    <div className='column'>
      <ProjectsContainer projects={projects} />
    </div>
  </div>
)

export default BodyContainer;
