import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  SearchBoxOuter,
  SearchBoxChildrenContainer,
  SearchBoxButtonContainer,
  SearchBoxHoverContainer,
  SearchBoxHoverContainerOpen,
  SearchBoxHoverContainerClosed,
  SearchBoxInput,
} from './SearchBox.module.css';
import { SearchIcon } from '../../assets';

function SearchBox({ children, onSearch, backgroundColor, textColor }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchInput = useRef(null);

  function handleSearchButtonClick() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      onSearch(searchInput.current.value);
    }
  }

  function handleCloseButtonClick() {
    setIsOpen(false);
    searchInput.current.value = '';
    onSearch('');
  }

  function handleKeypress({ code, key }) {
    if (code === 'Enter' || key === 'Enter') {
      handleSearchButtonClick();
    } else if (code === 'Escape' || key === 'Escape') {
      handleCloseButtonClick();
    }
  }

  const searchBoxButtonStyle = {
    backgroundColor: isOpen ? backgroundColor : 'transparent',
  };

  const searchInputStyle = {
    backgroundColor,
    color: textColor,
  };

  return (
    <div className={SearchBoxOuter}>
      <div className={SearchBoxChildrenContainer}>{children}</div>
      <button
        className={SearchBoxButtonContainer}
        style={searchBoxButtonStyle}
        type="button"
        onClick={handleSearchButtonClick}
      >
        <SearchIcon />
      </button>
      <div
        className={`${SearchBoxHoverContainer} ${
          isOpen ? SearchBoxHoverContainerOpen : SearchBoxHoverContainerClosed
        }`}
      >
        <button
          style={searchBoxButtonStyle}
          className={SearchBoxButtonContainer}
          type="button"
          onClick={handleCloseButtonClick}
        >
          X
        </button>
        <input
          type="text"
          ref={searchInput}
          className={SearchBoxInput}
          onKeyDown={handleKeypress}
          placeholder="Pesquisar na lista"
          style={searchInputStyle}
        />
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  children: PropTypes.node.isRequired,
  onSearch: PropTypes.func.isRequired,
};
export default SearchBox;
