import React from 'react';
import PropTypes from 'prop-types';

import { smallBadgeMain } from './SmallBadge.module.css';

function SmallBadge({ innerText, backgroundColor, textColor }) {
  const smallBadgeStyles = {
    backgroundColor,
    color: textColor,
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
  textColor: PropTypes.string.isRequired,
};

export default SmallBadge;
