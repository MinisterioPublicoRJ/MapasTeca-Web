import React from 'react';
import PropTypes from 'prop-types';

import { iconBadgeMain } from './IconBadge.module.css';
// import { useTheme } from '../../theming';

function IconBadge({ backgroundColor, onClick, text, icon }) {
  if (onClick) {
    // if it's a button, you'll always need text
    return (
      <button
        type="button"
        onClick={() => onClick()}
        className={iconBadgeMain}
        style={{ backgroundColor }}
      >
        {icon}
        {text}
      </button>
    );
  }
  return (
    <div className={iconBadgeMain} style={{ backgroundColor }}>
      {icon}
      {text}
    </div>
  );
}

IconBadge.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  text: PropTypes.node.isRequired,
};

IconBadge.defaultProps = {
  onClick: undefined,
  icon: undefined,
};

export default IconBadge;
