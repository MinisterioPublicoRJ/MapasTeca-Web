import React from 'react';
import PropTypes from 'prop-types';

import { sectionHeaderOuter } from './SectionHeader.module.css';
import { useTheme } from '../../theming';
import { SmallBadge } from '../../atoms';

function SectionHeader({ title, count, subtitle }) {
  const { primaryFontColor, sectionTitleFontSize, mainFontFamily, defaultFontSize } = useTheme();

  const headerStyles = {
    color: primaryFontColor,
    fontFamily: mainFontFamily,
    fontSize: sectionTitleFontSize,
  };

  const subtitleStyle = {
    fontSize: defaultFontSize,
  };

  const badgeCustomStyle = {
    maxHeight: sectionTitleFontSize,
  };

  return (
    <div className={sectionHeaderOuter} style={headerStyles}>
      <div>
        <h2 style={subtitle ? { margin: 0 } : {}}>{title}</h2>
        {count && <SmallBadge innerText={count} customStyle={badgeCustomStyle} />}
      </div>
      {subtitle && <span style={subtitleStyle}>{subtitle}</span>}
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
SectionHeader.defaultProps = { count: undefined, subtitle: undefined };
export default SectionHeader;
