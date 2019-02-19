import React, { Component } from "react";
import ReactDOM from "react-dom";
import TopbarContainer from './TopbarContainer.jsx';
import BodyContainer from './BodyContainer.jsx';
import styles from './Resume.module.scss';

class ResumeContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Adam Romeo',
      title: 'JUNIOR WEB DEVELOPER',
      summary: 'As a junior web developer transitioning from a decade-long career in the logistics industry, finding efficient solutions to technical problems is my specialty. Nothing brings me more joy than diving deep into new topics and quickly putting that knowledge into practice. I\'m passionate about building and supporting products that will make the next generation of technology a reality.',
      projects: [
        {
          'name': 'NuBrew',
          'link': 'https://github.com/arromeo/nubrew',
          'stack': 'React Native, Expo, AutoML, Express, Knex, PostgresQL',
          'start_date': 'December 2018',
          'end_date': 'Present',
          'description': 'NuBrew is a beer rating and recommendation app. We used Google Cloud\'s machine learning platform to make rating beers as easy as taking a photo of its label. The recommendations were generated based off of favorite styles and bitterness and we implemented a store locator based on favourite drinks.'
        },
        {
          'name': 'Ng Tweeter',
          'link': 'https://github.com/arromeo/ng-tweeter',
          'stack': 'Angular, NgRx, RxJS, Express, Knex, PostgresQL',
          'start_date': 'January 2019',
          'end_date': 'Present',
          'description': 'A recreation of a previous jQuery project, Ng Tweeter is a Twitter clone using the latest version of Angular. NgRx State and Effects were used to handle the app\'s data persistence, JSON Web Tokens for authentication, as well as a RESTful backend using Express.'
        },
        {
          'name': 'Sudoku Solver',
          'link': 'https://github.com/arromeo/sudoku-solver',
          'stack': 'Python, Flask, AWS (Elastic Beanstalk), Data Structures',
          'start_date': 'June 2018',
          'end_date': 'Present',
          'description': (<span>A Sudoku puzzle solver that completes the most difficult puzzles in an average of 50 milliseconds. Originally developed as a small personal project, I later adapted it into a Flask app that was <a style={{color: "green"}} href="http://flask-env.mheyxp8zdp.us-west-2.elasticbeanstalk.com/" target="_blank">deployed on Elastic Beanstalk.</a></span>)
        },
        {
          'name': 'Mapm',
          'link': 'https://github.com/arromeo/mapm',
          'stack': 'Node, Express, Handlebars, PostgreSQL, Knex, jQuery, Ajax, Sass, REST',
          'start_date': 'November 2018',
          'end_date': 'December 2018',
          'description': 'Mapm is a publicly moderated map making app. My role in this group project consisted of handling the initial database migrations, composing queries and routes  to connect the database with the front-end and contributing to the integration of the Google Places and Maps APIs.'
        },
        {
          'name': 'Barz',
          'link': 'https://github.com/arromeo/barz',
          'stack': 'jQuery, CSS, HTML',
          'start_date': 'August 2018',
          'end_date': 'October 2018',
          'description': (<span>A bar chart creation and customisation library. As a drop-in JavaScript library, this was built using jQuery's DOM manipulation methods. To make the project more accessible, I created a <a style={{color: "green"}} href="https://arromeo.github.io/barz/" target="_blank">documentation website</a> that catalogues all available options.</span>)
        }
      ],
      experience: {
        'company': 'LKQ Corporation',
        'title': 'Warehouse Supervisor',
        'location': 'Pitt Meadows, BC',
        'startDate': 'February, 2010',
        'endDate': 'Present',
        'description': [
          'Utilized inventory management software and Excel/VBA to identify potential improvements in operations efficiency and discover stock-level anomalies.',
          'Delivered consistent results by effectively deploying my team and resources in a fast paced setting.',
          'Identified bottlenecks and developed a staggered schedule system that reduced overtime by 33%.',
          'Created training material and instructed new hires on best practices.',
          'Pursued voluntary training opportunities and served on safety and productivity committees to help address operational weaknesses.'
        ]
      },
      education: [
        {
          'institution': 'Lighthouse Labs',
          'credential': 'Web Development Diploma',
          'start_date': 'October 2018',
          'end_date': 'January 2019'
        },
        {
          'institution': 'St. John Ambulance',
          'credential': 'Level 2 OFA Certification',
          'start_date': 'June 2018',
          'end_date': 'July 2018'
        }
      ],
      skills: {
        'Languages': [
          'Javascript',
          'Python',
          'Ruby',
          'TypeScript'
        ],
        'Front End': [
          'React',
	        'Angular',
          'NgRx',
          'jQuery',
          'HTML',
          'CSS/SCSS',
          'EJS'
        ],
        'Back End': [
          'Node',
          'Express',
          'SQL',
          'NoSQL',
          'Knex',
          'Ruby on Rails',
        ],
        'Other': [
          'Webpack',
          'React Native',
          'Rspec',
        ],
        'Administrative': [
          'Excel/VBA',
          'First Aid'
        ]
      },
    };
  }

  render() {
    return (
      <div className={styles.resume}>
        <TopbarContainer
          name={this.state.name}
          title={this.state.title} />
        <BodyContainer
          summary={this.state.summary}
          projects={this.state.projects}
          experience={this.state.experience}
          education={this.state.education}
          skills={this.state.skills} />
      </div>
    );
  }
}
export default ResumeContainer;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<ResumeContainer />, wrapper) : false;
