import React, { Component } from "react";

const SkillsList = ({skills}) => {

  const formattedSections = [];
  
  function formattedSkills (skillList) {
    const result = [];

    skillList.map((skill) => {
      result.push(<p key={skill} className='skill-item'>{skill}</p>);
    });

    return result;
  }

  for (let key in skills) {
    formattedSections.push(
      <div key={key} className='skill-section'>
        <p key={key} className='skill-section-title'>{key}</p>
        {formattedSkills(skills[key])}
      </div>
    );
  }

  return (
    <div className='skills-container'>
      {formattedSections}
    </div>
  )
}

export default SkillsList;