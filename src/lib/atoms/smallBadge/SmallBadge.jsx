import React from 'react';
import PropTypes from 'prop-types';

import { smallBadgeMain } from './SmallBadge.module.css';
// import { useTheme } from '../../theming';

function SmallBadge({ innerText }) {
  // const { secondaryFontColor, defaultFontSize, colorDanger } = useTheme();
  /*
  const styles = {
    backgroundColor: colorDanger,
    color: secondaryFontColor,
    minWidth: `calc(2 * ${defaultFontSize})`,
    padding: `calc(${defaultFontSize} / 4) ${defaultFontSize}`,
    ...customStyle,
  };
  */
  return (
    <span className={smallBadgeMain}>
      {innerText}
    </span>
  );
}

SmallBadge.propTypes = { innerText: PropTypes.string.isRequired };
// SmallBadge.defaultProps = { customStyle: {} };

export default SmallBadge;
