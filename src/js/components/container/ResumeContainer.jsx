import React, { Component } from "react";
import ReactDOM from "react-dom";
import SidebarContainer from './SidebarContainer.jsx';
import BodyContainer from './BodyContainer.jsx';

class ResumeContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Adam Romeo',
      title: 'Junior Web Developer',
      summary: '',
      projects: {},
      experiences: {},
      educations: {},
      skills: {},
    };
  }

  render() {
    return (
      <div className='resume'>
        <SidebarContainer
          name={this.state.name}
          title={this.state.title}
          skills={this.state.skills} />
        <BodyContainer
          summary={this.state.projects}
          projects={this.state.projects}
          experience={this.state.experience}
          education={this.state.education} />
      </div>
    );
  }
}
export default ResumeContainer;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<ResumeContainer />, wrapper) : false;
