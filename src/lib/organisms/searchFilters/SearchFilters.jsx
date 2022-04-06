import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { SearchIcon } from '../../assets';

import {
  searchFiltersWrapper,
  searchFiltersContent,
  searchFilterInputWrapper,
  searchFilterInput,
  searchFilterButton,
  searchFilterSection,
  searchFilterSectionClosed,
  searchFilterSectionOpen,
  searchFiltersSubDiv,
} from './SearchFilters.module.css';

function SearchFilters({ buttonText, onSearch, filters, primaryColor, secondaryColor }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchInput = useRef(null);
  const [filterStatus, setFilterStatus] = useState(filters.map((item) => item.status));

  function handleSearchButtonClick() {
    onSearch(searchInput.current.value, filterStatus);
  }

  function handleKeypress({ code, key }) {
    if (code === 'Enter' || key === 'Enter') {
      handleSearchButtonClick();
    }
  }

  function handleMouseHover() {
    setIsOpen(true);
  }

  function handleMouseOut() {
    setIsOpen(false);
  }

  const primaryColorStyle = {
    '--primaryColor': primaryColor,
    '--secondaryFontColor': secondaryColor,
  };

  return (
    <div
      className={searchFiltersWrapper}
      onMouseOver={handleMouseHover}
      onFocus={handleMouseHover}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
      style={primaryColorStyle}
    >
      <div className={searchFiltersContent}>
        <div className={searchFilterInputWrapper}>
          <SearchIcon height="16px" width="16px" colorFill={primaryColor} />
          <input
            type="text"
            ref={searchInput}
            className={searchFilterInput}
            onKeyDown={handleKeypress}
          />
        </div>
        <button type="button" className={searchFilterButton} onClick={handleSearchButtonClick}>
          {buttonText}
        </button>
      </div>
      <div
        className={`${searchFilterSection} ${
          isOpen ? searchFilterSectionOpen : searchFilterSectionClosed
        }`}
      >
        <p>Filtre por:</p>
        {filters.map(function (item, i) {
          const keyID = `filterID${i}`;
          const filterName = `filterName${i}`;
          return (
            <div key={keyID} className={searchFiltersSubDiv}>
              <input
                type="checkbox"
                nome={filterName}
                defaultChecked={filters[i].status}
                onChange={() => {
                  const tempArray = filterStatus;
                  tempArray[i] = !tempArray[i];
                  setFilterStatus(tempArray);
                }}
              />
              <label htmlFor={filterName}>{filters[i].nome}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

SearchFilters.propTypes = {
  buttonText: PropTypes.node.isRequired,
  onSearch: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape).isRequired,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

SearchFilters.defaultProps = {
  primaryColor: '#B93B40',
  secondaryColor: '#F2F3F8',
};

export default SearchFilters;
