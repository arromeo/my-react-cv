import React, { Component } from "react";

const EducationContainer = ({education}) => {
  const educationList = education.map(item => {
    return (
      <article key={item.institution + item.credential} className="education-item">
        <div className="education-header">
          <div className="education-header-left">
            <p className="education-institution">{item.institution}</p>
            <p className="education-credential">{item.credential}</p>
          </div>
          <div className="education-header-right">
            <p className="education-dates">{item.start_date} - {item.end_date}</p>
          </div>
        </div>
      </article>
    )
  });

  console.log(education);

  return (
    <div className="section-container">
      <p className="section-title">Education</p>
      <div className="education-container">
        {educationList}
      </div>
    </div>
  )
}

export default EducationContainer;