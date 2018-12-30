import React, { Component } from "react";
import Nameplate from '../presentational/Nameplate.jsx';
import SkillsContainer from './SkillsContainer.jsx';
import Contact from '../presentational/Contact.jsx';

const SidebarContainer = ({name, title, skills}) => (
  <div className='sidebar'>
    <Nameplate name={name} title={title} />
    <Contact />
    <SkillsContainer skills={skills} />
  </div>
)

export default SidebarContainer;