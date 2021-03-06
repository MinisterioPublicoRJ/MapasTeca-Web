import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { SearchIcon } from '../../assets';
import styles from './SearchFilters.module.css';

const {
  searchFiltersWrapper,
  searchFiltersContent,
  searchFilterInputWrapper,
  searchFilterInput,
  searchFilterButton,
  searchFilterSection,
  searchFilterSectionClosed,
  searchFilterSectionOpen,
  searchFiltersSubDiv,
} = styles;

function SearchFilters({ buttonText, onSearch, filters }) {
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

  return (
    <div
      className={searchFiltersWrapper}
      onMouseOver={handleMouseHover}
      onFocus={handleMouseHover}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
    >
      <div className={searchFiltersContent}>
        <div className={searchFilterInputWrapper}>
          <SearchIcon height="16px" width="16px" colorFill="#b93b40" />
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
};

export default SearchFilters;
