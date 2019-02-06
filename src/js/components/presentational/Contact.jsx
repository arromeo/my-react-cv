import React from 'react';
import LinkedInIcon from '../icons/LinkedIn.jsx';
import GithubIcon from '../icons/Github.jsx';
import EmailIcon from '../icons/Email.jsx';
import PhoneIcon from '../icons/Phone.jsx';

const Contact = ({contact}) => (
  <div style={styles.contactContainer}>
    <a href='mailto:adam.r.romeo@gmail.com'>
      <div className='contact-link' style={styles.contactLink}>
        <EmailIcon />
        <span style={styles.contactContent}>adam.r.romeo@gmail.com</span>
      </div>
    </a>
    <a href='tel:604-355-9459'>
      <div className='contact-link' style={styles.contactLink}>
        <PhoneIcon />
        <span style={styles.contactContent}>(604)355-9459</span>
      </div>
    </a>
    <a href='https://www.github.com/arromeo' target="_blank">
      <div className='contact-link' style={styles.contactLink}>
        <GithubIcon />
        <span style={styles.contactContent}>arromeo</span>
      </div>
    </a>
    <a href='https://www.linkedin.com/in/arromeo' target="_blank">
      <div className='contact-link' style={styles.contactLink}>
        <LinkedInIcon />
        <span style={styles.contactContent}>arromeo</span>
      </div>
    </a>
  </div>
)

const styles = {
  contactContainer: {
    marginLeft: '20px',
    padding: '5px 0px',
    color: '#FFFFFF',
    fill: '#FFFFFF'
  },
  contactLink: {
    display: 'inline-flex',
    marginRight: '20px',
    alignItems: 'center'
  },
  contactContent: {
    marginLeft: '5px',
    fontFamily: '"Roboto Slab", serif'
  }
}

export default Contact;
