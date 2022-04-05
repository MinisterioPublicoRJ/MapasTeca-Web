import React from 'react';
import PropTypes from 'prop-types';

import { smallBadgeMain } from './SmallBadge.module.css';

function SmallBadge({ innerText, backgroundColor }) {
  const smallBadgeStyles = {
    backgroundColor,
  };

  return (
    <span className={smallBadgeMain} style={smallBadgeStyles}>
      {innerText}
    </span>
  );
}

SmallBadge.propTypes = {
  innerText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default SmallBadge;
