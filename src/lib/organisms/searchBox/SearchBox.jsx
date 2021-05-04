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
import { useTheme } from '../../theming';
import { SearchIcon } from '../../assets';

function SearchBox({ children, onSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchInput = useRef(null);

  const { primaryColor, secondaryFontColor } = useTheme();

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
  }

  function handleKeypress({ code }) {
    if (code === 'Enter') {
      handleSearchButtonClick();
    } else if (code === 'Escape') {
      handleCloseButtonClick();
    }
  }

  return (
    <div className={SearchBoxOuter}>
      <div className={SearchBoxChildrenContainer}>{children}</div>
      <button
        className={SearchBoxButtonContainer}
        type="button"
        onClick={handleSearchButtonClick}
        style={{ backgroundColor: isOpen ? primaryColor : 'transparent' }}
      >
        <SearchIcon />
      </button>
      <div
        className={`${SearchBoxHoverContainer} ${
          isOpen ? SearchBoxHoverContainerOpen : SearchBoxHoverContainerClosed
        }`}
      >
        <button
          className={SearchBoxButtonContainer}
          type="button"
          onClick={handleCloseButtonClick}
          style={{
            color: secondaryFontColor,
            backgroundColor: isOpen ? primaryColor : 'transparent',
          }}
        >
          X
        </button>
        <input
          type="text"
          ref={searchInput}
          className={SearchBoxInput}
          onKeyDown={handleKeypress}
          placeholder="Pesquisar na lista"
          style={{ backgroundColor: primaryColor }}
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
