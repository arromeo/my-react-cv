import React from 'react';
import LinkedInIcon from '../icons/LinkedIn.jsx';
import GithubIcon from '../icons/Github.jsx';
import EmailIcon from '../icons/Email.jsx';
import PhoneIcon from '../icons/Phone.jsx';

const Contact = ({contact}) => (
  <div className='contact-container'>
    <a href='mailto:adam.r.romeo@gmail.com'>
      <div className='contact-line'>
        <EmailIcon />
        <span className="contact-content">adam.r.romeo@gmail.com</span>
      </div>
    </a>
    <a href='tel:604-355-9459'>
      <div className='contact-line'>
        <PhoneIcon />
        <span className="contact-content">(604)355-9459</span>
      </div>
    </a>
    <a href='https://www.github.com/arromeo'>
      <div className='contact-line'>
        <GithubIcon />
        <span className="contact-content">arromeo</span>
      </div>
    </a>
    <a href='https://www.linkedin.com/in/arromeo'>
      <div className='contact-line'>
        <LinkedInIcon />
        <span className="contact-content">arromeo</span>
      </div>
    </a>
  </div>
)

export default Contact;