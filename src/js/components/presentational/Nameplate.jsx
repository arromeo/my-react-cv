import React from 'react';
import PropTypes from 'prop-types';

const Nameplate = ({name, title}) => (
  <div className='nameplate'>
    <p className='name'>{name}</p>
    <p className='title'>{title}</p>
  </div>
)

Nameplate.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Nameplate;