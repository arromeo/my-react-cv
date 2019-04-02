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
      summary: 'An energetic and creative junior web developer who enjoys finding efficient solutions to technical problems. Passionate about building and supporting products that will make the next generation of technology a reality. Recent projects and interests have revolved around static-site generation and hosting with Gatsby, Netlify and headless-CMS.',
      projects: [
        {
          'name': 'NuBrew',
          'link': 'https://github.com/arromeo/nubrew',
          'stack': 'React Native, Expo, AutoML, Express, Knex, PostgresQL',
          'start_date': 'December 2018',
          'end_date': 'January 2019',
          'description': 'A mobile beer rating and recommendation app that makes rating as easy as taking a photo of the label. We used thousands of beer label images to create our machine learning models and predictions were made by sending the image data to the AutoML API.'
        },
        {
          'name': 'Romeo\'s Rat Pack Rattery',
          'link': 'https://github.com/arromeo/rrp',
          'stack': 'Gatsby, React, GraphQL, Styled Components',
          'start_date': 'March 2019',
          'end_date': 'Present',
          'description': (<span>A Gatsby generated website for a small show rat breeding business. The individual pages for rats included developing custom plug-ins to generate GraphQL from unsupported data formats, and the blog section was setup to run off of Markdown files for easy maintainability. The site is currently being developed but can be viewed <a href="https://arromeo.github.io/rrp/" target="_blank">here.</a></span>)
        },
        {
          'name': 'Sudoku Solver',
          'link': 'https://github.com/arromeo/sudoku-solver',
          'stack': 'Python, Flask, AWS Elastic Beanstalk',
          'start_date': 'June 2018',
          'end_date': 'January 2018',
          'description': (<span>A Sudoku puzzle solver that completes the most difficult puzzles in an average of 50 milliseconds. Originally developed as a small personal project, I later adapted it into a Flask app that was <a href="http://flask-env.mheyxp8zdp.us-west-2.elasticbeanstalk.com/" target="_blank">deployed on Elastic Beanstalk.</a></span>)
        },
        {
          'name': 'Mapm',
          'link': 'https://github.com/Jesswinters/mapm',
          'stack': 'Node, Express, Handlebars, PostgreSQL, Knex, jQuery, Sass',
          'start_date': 'November 2018',
          'end_date': 'December 2018',
          'description': 'Mapm is a publicly moderated map making app. My role in this group project consisted of handling the initial database migrations, composing queries and routes  to connect the database with the front-end and contributing to the integration of the Google Places and Maps APIs.'
        },
        {
          'name': 'Barz',
          'link': 'https://github.com/arromeo/barz',
          'stack': 'jQuery, JavaScript, CSS, HTML',
          'start_date': 'August 2018',
          'end_date': 'October 2018',
          'description': (<span>A bar chart creation and customization library. Built using jQuery and JS, Barz is a true plug-and-play script that is very fast and easy to put into any existing project. To make the project more accessible, I created a <a href="https://arromeo.github.io/barz/" target="_blank">documentation website</a> that catalogues all available options.</span>)
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
          'Gatsby',
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
