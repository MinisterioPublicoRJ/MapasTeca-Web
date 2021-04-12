import React from 'react';
import PropTypes from 'prop-types';

import { smallBadgeMain } from './SmallBadge.module.css';
import { useTheme } from '../../theming';

function SmallBadge({ innerText, customStyle }) {
  const { secondaryFontColor, defaultFontSize } = useTheme();

  const styles = {
    backgroundColor: 'purple',
    color: secondaryFontColor,
    minWidth: `calc(2 * ${defaultFontSize})`,
    padding: `calc(${defaultFontSize} / 4) ${defaultFontSize}`,
    ...customStyle,
  };

  return (
    <span className={smallBadgeMain} style={styles}>
      {innerText}
    </span>
  );
}

SmallBadge.propTypes = { innerText: PropTypes.string.isRequired, customStyle: PropTypes.shape({}) };
SmallBadge.defaultProps = { customStyle: {} };

export default SmallBadge;
