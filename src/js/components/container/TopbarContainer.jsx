import React, { Component } from "react";
import Nameplate from '../presentational/Nameplate.jsx';
import SkillsContainer from './SkillsContainer.jsx';
import Contact from '../presentational/Contact.jsx';

import styles from './Topbar.module.scss';

const TopbarContainer = ({name, title, skills}) => (
  <div className={styles.topbar}>
    <div className={styles.header}>
      <Nameplate name={name} title={title} />
      <Contact />
    </div>
  </div>
)

export default TopbarContainer;