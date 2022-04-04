import React from 'react';
import PropTypes from 'prop-types';

import { sectionHeaderOuter, sectionSubtitle } from './SectionHeader.module.css';
import { SmallBadge } from '../../atoms';

function SectionHeader({ title, count, subtitle }) {
  return (
    <div className={sectionHeaderOuter}>
      <div>
        <h2 style={subtitle ? { margin: 0 } : {}}>{title}</h2>
        {count && <SmallBadge innerText={count} />}
      </div>
      {subtitle && <span className={sectionSubtitle}>{subtitle}</span>}
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
