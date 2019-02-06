import React, { Component } from "react";
import * as sectionStyles from './Section.module.scss';

const SummaryContainer = ({summary}) => (
  <div className={sectionStyles.sectionContainer}>
    <p className={sectionStyles.sectionTitle}>Summary</p>
    <p className={sectionStyles.sectionContent}>{summary}</p>
  </div>
)

export default SummaryContainer;