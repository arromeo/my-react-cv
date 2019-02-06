import React, { Component } from "react";
import Nameplate from '../presentational/Nameplate.jsx';
import SkillsContainer from './SkillsContainer.jsx';
import Contact from '../presentational/Contact.jsx';

const SidebarContainer = ({name, title, skills}) => (
  <div style={styles.sidebar}>
    <Nameplate name={name} title={title} />
    <Contact />
    {/* <SkillsContainer skills={skills} /> */}
  </div>
)

const styles = {
  sidebar: {
    backgroundColor: '#228B22',
    width: '100%'
  }
}

export default SidebarContainer;