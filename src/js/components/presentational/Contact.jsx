import React from 'react';
import LinkedInIcon from '../icons/LinkedIn.jsx';
import GithubIcon from '../icons/Github.jsx';
import EmailIcon from '../icons/Email.jsx';
import PhoneIcon from '../icons/Phone.jsx';

import styles from './Contact.module.scss';

const Contact = ({contact}) => (
  <div className={styles.contactContainer}>
    <a href='mailto:adam.r.romeo@gmail.com'>
      <div className={styles.contactLink}>
        <EmailIcon />
        <span className={styles.contactContent}>adam.r.romeo@gmail.com</span>
      </div>
    </a>
    <a href='tel:604-355-9459'>
      <div className={styles.contactLink}>
        <PhoneIcon />
        <span className={styles.contactContent}>(604)355-9459</span>
      </div>
    </a>
    <a href='https://www.github.com/arromeo' target="_blank">
      <div className={styles.contactLink}>
        <GithubIcon />
        <span className={styles.contactContent}>arromeo</span>
      </div>
    </a>
    <a href='https://www.linkedin.com/in/arromeo' target="_blank">
      <div className={styles.contactLink}>
        <LinkedInIcon />
        <span className={styles.contactContent}>arromeo</span>
      </div>
    </a>
  </div>
)

export default Contact;
