import React from 'react';
import PropTypes from 'prop-types';

import { iconBadgeMain } from './IconBadge.module.css';
// import { useTheme } from '../../theming';

function IconBadge({ backgroundColor, handleClick, text }) {
  if (handleClick) {
    // if it's a button, you'll always need text
    return (
      <button
        type="button"
        onClick={() => handleClick()}
        className={iconBadgeMain}
        style={{ backgroundColor }}
      >
        {text}
      </button>
    );
  }
  return (
    <div className={iconBadgeMain} style={{ backgroundColor }}>
      {text}
    </div>
  );
}

IconBadge.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  //   icon: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
};

IconBadge.defaultProps = {
  handleClick: undefined,
};

export default IconBadge;
