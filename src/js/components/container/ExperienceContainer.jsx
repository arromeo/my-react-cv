import React, { Component } from "react";

const ExperienceContainer = ({experience}) => {
 
  const experienceList = experience.description.map(item => (<li key={item} className='experience-description'>{item}</li>));

  return (
    <div className="section-container">
      <p className='section-title'>Experience</p>
      <div className='experience-container'>
        <div className='experience-left-col'>
          <p className='experience-company'>{experience.company}</p>
          <p className='experience-content'>{experience.title}</p>
        </div>
        <div className='experience-right-col'>
          <p className='experience-content'>{experience.startDate} to {experience.endDate}</p>
          <p className='experience-content'>{experience.location}</p>
        </div>
      </div>
      <ul className='experience-list'>
        {experienceList}
      </ul>
    </div>
  )
}

export default ExperienceContainer;