import React from 'react';
import PropTypes from 'prop-types';

import { smallBadgeMain } from './SmallBadge.module.css';

function SmallBadge({ innerText, customStyle }) {
  return (
    <span className={smallBadgeMain} style={customStyle}>
      {innerText}
    </span>
  );
}

SmallBadge.propTypes = { innerText: PropTypes.string.isRequired, customStyle: PropTypes.shape({}) };
SmallBadge.defaultProps = { customStyle: {} };

export default SmallBadge;
