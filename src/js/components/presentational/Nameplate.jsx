import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nameplate.module.scss';

const Nameplate = ({name, title}) => (
  <div className={styles.namePlate}>
    <p className={styles.name}>{name}</p>
    <p className={styles.title}>{title}</p>
  </div>
)

Nameplate.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Nameplate;