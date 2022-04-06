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
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

SmallBadge.defaultProps = {
  backgroundColor: '#F86C72',
  textColor: '#fff',
};

export default SmallBadge;
