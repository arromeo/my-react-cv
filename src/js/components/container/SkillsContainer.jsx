import React, { Component } from "react";
import SkillsList from '../presentational/SkillsList.jsx';
import * as sectionStyles from './Section.module.scss';

const SkillsContainer = ({skills}) => (
  <div className={sectionStyles.sectionContainer}>
    <p className={sectionStyles.sectionTitle}>Skills</p>
    <div className={sectionStyles.sectionContent}>
      <SkillsList skills={skills} />
    </div>
  </div>
)

export default SkillsContainer;