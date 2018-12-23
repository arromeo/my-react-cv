import React, { Component } from "react";
import SkillsList from '../presentational/SkillsList.jsx';

const SkillsContainer = ({skills}) => (
  <div className='skills-container'>
    <SkillsList skills={skills} />
  </div>
)

export default SkillsContainer;