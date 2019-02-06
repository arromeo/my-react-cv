import React from 'react';
import PropTypes from 'prop-types';

const Nameplate = ({name, title}) => (
  <div style={styles.namePlate}>
    <p style={styles.name}>{name}</p>
    <p style={styles.title}>{title}</p>
  </div>
)

Nameplate.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const styles = {
  namePlate: {
    margin: '0.8rem 0rem 0.4rem 0.4rem'
  },
  name: {
    fontFamily: '"Roboto Slab", sans-serif',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    letterSpacing: '0.8px',
    color: '#FFFFFF',
    margin: '0.4rem 0.4rem 0.2rem 0.4rem'
  },
  title: {
    fontFamily: '"Lato", sans-serif',
    fontSize: '1.3rem',
    color: '#FFFFFF',
    margin: '0.0rem 0.4rem 0.4rem 0.4rem'
  }
}

export default Nameplate;