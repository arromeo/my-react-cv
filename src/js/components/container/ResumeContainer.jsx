import React, { Component } from "react";
import ReactDOM from "react-dom";
import SidebarContainer from './SidebarContainer.jsx';
import BodyContainer from './BodyContainer.jsx';

class ResumeContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Adam Romeo',
      title: 'JR FULLSTACK DEVELOPER',
      summary: 'As a junior web developer transitioning from a decade-long career in the logistics industry, finding efficient solutions to technical problems is my specialty. Nothing brings me more joy than diving deep into new topics and quickly putting that knowledge into practice. I\'m passionate about building and supporting products that will make the next generation of technology a reality.',
      projects: [
        {
          'name': 'NuBrew',
          'stack': 'React Native, Expo, AutoML, Express, Knex, PostgresQL',
          'start_date': 'December 2018',
          'end_date': 'Present',
          'description': 'NuBrew is a beer rating and recommendation app. We used Google Cloud\'s machine learning platform to make rating beers as easy as taking a photo of its label. The recommendations were generated based off of favorite styles and bitterness and we implemented a store locator based on favorite drinks.'
        },
        {
          'name': 'Mapm',
          'stack': 'Node, Express, Handlebars, PostgreSQL, Knex, jQuery, Ajax, Sass, REST',
          'start_date': 'November 2018',
          'end_date': 'December 2018',
          'description': 'Mapm is a  publicly moderated map making app. My role in this group project consisted of handling the initial database migrations, composing queries and routes  to connect the database with the front-end and contributing to the integration of the Google Places and Maps APIs.'
        },
        {
          'name': 'Chatty',
          'stack': 'React, Websockets, Sass',
          'start_date': 'November 2018',
          'end_date': 'December 2018',
          'description': 'A real-time chat app that allows users to post images and emojis in the chat. This included creating React components from the ground up as well as integrating pre-built components. I also created the web socket server and the DSL that allowed the server to communicate with the clients.'
        },
        {
          'name': 'Sudoku Solver',
          'stack': 'Python, Flask, AWS (Elastic Beanstalk), Data Structures',
          'start_date': 'June 2018',
          'end_date': 'July 2018',
          'description': 'A Sudoku puzzle solver that completes the most difficult puzzles in an average of 50 milliseconds. I became inspired to plan and execute a solution to this problem after reading an introductory computer science book. After completing bootcamp I decided to adapt and deploy the solver on Elastic Beanstalk.'
        },
        {
          'name': 'Barz',
          'stack': 'jQuery, CSS, HTML',
          'start_date': 'August 2018',
          'end_date': 'October 2018',
          'description': 'A barchart creation and customization library. As a drop-in JavaScript library, this was built using jQuery\'s DOM manipulation methods. To make the project more accessible, I created a documentation website that catalogs all available options.'
        }
      ],
      experience: {
        'company': 'LKQ Corporation',
        'title': 'Warehouse Supervisor',
        'location': 'Pitt Meadows, BC',
        'startDate': 'February, 2010',
        'endDate': 'December, 2018',
        'description': [
          'Utilized inventory management software and Excel/VBA to identify potential improvements in opperations efficiency and discover stock-level anomalies.',
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
          'end_date': 'January 2018'
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
          'Ruby'
        ],
        'Front End': [
          'React',
          'jQuery',
          'Ajax',
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
          'First Aid',
          'Technical Documentation'
        ]
      },
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
          summary={this.state.summary}
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
