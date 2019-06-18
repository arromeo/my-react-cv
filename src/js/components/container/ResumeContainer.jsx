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
      title: 'WEB DEVELOPER',
      summary: 'Energetic and creative web developer able to build full-stack applications in the .NET and JavaScript ecosystems. Comfortable working with back-end technologies such as servers, databases and cloud architectures, as well as front-end frameworks like React, SCSS and TypeScript. Exceptional research, practical and time-management skills as exhibited in my ability to learn and build with new technologies outside a classroom setting. Excited to add value to a team and continue growing.',
      projects: [
        {
          'name': 'ShrtLnks',
          'link': 'https://github.com/arromeo/ShrtLnks',
          'stack': 'ASP.NET Core, C#, Razor, Entity Framework Core',
          'start_date': 'June 2019',
          'end_date': 'Present',
          'description': 'A link shortening service built using MVC. The goal of this project was to explore ASP.NET Core and to further my understand of OOP patterns and how they\'re used to develop back-ends.'
        },
        {
          'name': 'TypeScript Sudoku Solver',
          'link': 'https://github.com/arromeo/ts-sudoku-solver',
          'stack': 'TypeScript, React',
          'start_date': 'May 2019',
          'end_date': 'June 2019',
          'description': (<span>A Sudoku puzzle solver built in TypeScript. This was a re-iteration of a previous project built in Python. My goals for this project were to practice TypeScript, to build a better understanding of OOP principles, and to improve the overall design of the previous solution. The project is published on <a href="https://arromeo.github.io/ts-sudoku-solver/" target="_blank">Github Pages</a>.</span>)
        },
        {
          'name': 'NuBrew',
          'link': 'https://github.com/arromeo/nubrew',
          'stack': 'React Native, Expo, AutoML, Express, Knex, PostgresQL',
          'start_date': 'December 2018',
          'end_date': 'January 2019',
          'description': 'A mobile beer rating and recommendation app that makes rating as easy as taking a photo of the label. We used thousands of beer label images to create our machine learning models and predictions were made by sending the image data to the AutoML API.'
        },
        {
          'name': 'Mapm',
          'link': 'https://github.com/arromeo/mapm',
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
        'endDate': 'May, 2019',
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
          'TypeScript',
          'Python',
          'C#',
          'Ruby'
        ],
        'Front End': [
          'React',
          'jQuery',
          'CSS/SCSS',
          'EJS'
        ],
        'Back End': [
          'Node',
          'Express',
          'ASP.NET',
          'SQL',
          'NoSQL',
          'Knex',
          'Ruby on Rails',
          'Nginx'
        ],
        'Other': [
          'Gatsby',
          'Webpack',
          'React Native',
          'Rspec',
          'Jest'
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
