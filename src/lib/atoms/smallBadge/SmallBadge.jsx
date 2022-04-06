import React from 'react';
import PropTypes from 'prop-types';

import styles from './SmallBadge.module.css';
const { smallBadgeMain } = styles;

function SmallBadge({ innerText }) {
  return <span className={smallBadgeMain}>{innerText}</span>;
}

SmallBadge.propTypes = { innerText: PropTypes.string.isRequired, customStyle: PropTypes.shape({}) };
SmallBadge.defaultProps = { customStyle: {} };

export default SmallBadge;
