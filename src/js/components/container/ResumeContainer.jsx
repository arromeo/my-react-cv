import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nameplate from '../presentational/Nameplate.jsx';

class ResumeContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Adam Romeo',
      title: 'Jr Web Developer',
    };
  }

  render() {
    return (
      <Nameplate name={this.state.name} title={this.state.title} />
    );
  }
}
export default ResumeContainer;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<ResumeContainer />, wrapper) : false;

wrapper ? console.log('Exists') : console.log('Does not exist');