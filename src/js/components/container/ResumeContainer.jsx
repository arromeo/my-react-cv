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
      summary: 'Junior web developer with several years of supervisory experience in the auto and logistics industries. I am looking for an opportunity to leverage my passion for diving deep into new subjects and to be a part of a team that will fascilitate both personal and professional growth. My interests as a web developer are to build the products and tools that will make the next generation of technology a possibility.',
      projects: [
        {
          'name': 'NuBrew',
          'stack': 'React Native, Expo, AutoML, Express, Knex, PostgresQL',
          'start_date': 'December 2018',
          'end_date': 'Present',
          'description': 'Asymmetrical poutine you probably haven\'t heard of them locavore messenger bag brunch, hoodie chia. Literally yuccie mlkshk, cliche air plant jean shorts hoodie mixtape twee tilde kale chips plaid viral.'
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
          'stack': 'Python, Data Structures',
          'start_date': 'June 2018',
          'end_date': 'July 2018',
          'description': 'A Sudoku puzzle solver that completes the most difficult puzzles in an average of 50 milliseconds. I became inspired to plan and execute a solution to this problem after reading an introductory computer science book. My solution used a depth-first graph traversal algorithm.'
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
          'Developed and adhered to best practices while supervising day-to-day operations.',
          'Used warehouse management software and Excel/VBA to identify efficiency improvements and discover inventory anomalies.',
          'Delivered consistently by utilizing my team and resources in a fast paced setting.',
          'Identified bottle necks and developed a staggered schedule system that reduced overtime by 4 hours per employee per week.',
          'Created training material and instructed new hires on company procedures.',
          'Pursued voluntary training opportunities and participated in safety and efficiency meetings to help address operational weaknesses.'
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
