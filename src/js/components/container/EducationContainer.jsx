import React, { Component } from "react";
import * as sectionStyles from './Section.module.scss';
import styles from './Education.module.scss';

const EducationContainer = ({education}) => {
  const educationList = education.map(item => {
    return (
      <article key={item.institution + item.credential} className={styles.item}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.institution}>{item.institution}</p>
            <p className={styles.credential}>{item.credential}</p>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.dates}>{item.start_date} - {item.end_date}</p>
          </div>
        </div>
      </article>
    )
  });

  console.log(education);

  return (
    <div className={sectionStyles.sectionContainer}>
      <p className={sectionStyles.sectionTitle}>Education</p>
      <div className={styles.container}>
        {educationList}
      </div>
    </div>
  )
}

export default EducationContainer;