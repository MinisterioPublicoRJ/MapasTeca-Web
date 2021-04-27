import React from 'react';
import PropTypes from 'prop-types';

import { SearchBoxOuter } from './SearchBox.module.css';
// import { useTheme } from '../../theming';
// import { SmallBadge } from '../../atoms';

function SearchBox({ children }) {
  return (
    <div className={SearchBoxOuter}>
      <div>{children}</div>
      <div>S</div>
    </div>
  );
}

SearchBox.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SearchBox;
