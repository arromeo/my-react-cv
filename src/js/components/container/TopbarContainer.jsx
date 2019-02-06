import React, { Component } from "react";
import Nameplate from '../presentational/Nameplate.jsx';
import SkillsContainer from './SkillsContainer.jsx';
import Contact from '../presentational/Contact.jsx';

import styles from './Topbar.module.scss';

const TopbarContainer = ({name, title, skills}) => (
  <div className={styles.sidebar}>
    <Nameplate name={name} title={title} />
    <Contact />
    {/* <SkillsContainer skills={skills} /> */}
  </div>
)

export default TopbarContainer;