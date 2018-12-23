import React, { Component } from "react";
import SkillsList from '../presentational/SkillsList.jsx';

const SkillsContainer = ({skills}) => (
  <SkillsList skills={skills} />
)

export default SkillsContainer;