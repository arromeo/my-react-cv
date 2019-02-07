import React, { Component } from "react";
import SummaryContainer from './SummaryContainer.jsx';
import ProjectsContainer from './ProjectsContainer.jsx';
import ExperienceContainer from './ExperienceContainer.jsx';
import EducationContainer from './EducationContainer.jsx';
import SkillsContainer from './SkillsContainer.jsx';

import styles from './Body.module.scss';

const BodyContainer = ({summary, experience, education, projects, skills}) => (
  <div className={styles.resumeBody}>
    <div className={styles.leftCol}>
      <SummaryContainer summary={summary} />
      <SkillsContainer skills={skills} />
      <div className={styles.oneCol}>
        <ProjectsContainer projects={projects} />
      </div>
      <ExperienceContainer experience={experience} />
      <EducationContainer education={education} />
    </div>
    <div className={styles.rightCol}>
      <ProjectsContainer projects={projects} />
    </div>
  </div>
)

export default BodyContainer;
