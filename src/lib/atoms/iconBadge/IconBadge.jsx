import React from 'react';
import PropTypes from 'prop-types';

import { iconBadgeMain } from './IconBadge.module.css';
import { useTheme } from '../../theming';

/**
 * Usado para fins decorativos. Para ações, utilize o ClickableIconBadge para maior acessibilidade.
 * O badge toma 100% do espaço disponível no pai, então caso o pai tenha bordas redondas e
 * `overflow: hidden` o IconBadge também vai ficar redondo (exemplo abaixo).
 */
function IconBadge({ backgroundColor, text, icon }) {
  const { smallFontSize, secondaryFontColor, mainFontFamily } = useTheme();

  const outerStyles = {
    backgroundColor,
    fontFamily: mainFontFamily,
    fontSize: smallFontSize,
    color: secondaryFontColor,
  };

  return (
    <div className={iconBadgeMain} style={outerStyles}>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
}

IconBadge.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  icon: PropTypes.node,
  text: PropTypes.node,
};

IconBadge.defaultProps = {
  icon: undefined,
  text: undefined,
};

export default IconBadge;
