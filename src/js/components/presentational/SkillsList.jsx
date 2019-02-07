import React, { Component } from "react";
import * as sectionStyles from '../container/Section.module.scss';
import styles from './SkillsList.module.scss';

const SkillsList = ({skills}) => {

  const formattedSections = [];
  
  function formattedSkills (skillList) {
    let builtString = "";

    skillList.map((skill) => {
      builtString += skill + ', ';
    });

    builtString = builtString.slice(0,-2);
    return (<span className={styles.item}>{builtString}</span>);
  }

  for (let key in skills) {
    formattedSections.push(
      <div key={key}>
        <span key={key} className={styles.title}>{key} - </span>
        {formattedSkills(skills[key])}
      </div>
    );
  }

  return (
    <div className={sectionStyles.sectionContent}>
      {formattedSections}
    </div>
  )
}

export default SkillsList;