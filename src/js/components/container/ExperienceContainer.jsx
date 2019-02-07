import React, { Component } from "react";
import * as sectionStyles from './Section.module.scss';
import styles from './Experience.module.scss';

const ExperienceContainer = ({experience}) => {
 
  const experienceList = experience.description.map(item => (<li key={item} className={styles.description}>{item}</li>));

  return (
    <div className={sectionStyles.sectionContainer}>
      <p className={sectionStyles.sectionTitle}>Experience</p>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <p className={styles.company}>{experience.company}</p>
          <p className={styles.content}>{experience.title}</p>
        </div>
        <div className={styles.rightCol}>
          <p className={styles.content}>{experience.startDate} to {experience.endDate}</p>
          <p className={styles.content}>{experience.location}</p>
        </div>
      </div>
      <ul className={styles.list}>
        {experienceList}
      </ul>
    </div>
  )
}

export default ExperienceContainer;