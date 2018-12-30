import React, { Component } from "react";

const SummaryContainer = ({summary}) => (
  <div className="section-container">
    <p className='section-title'>Summary</p>
    <p className='section-content'>{summary}</p>
  </div>
)

export default SummaryContainer;