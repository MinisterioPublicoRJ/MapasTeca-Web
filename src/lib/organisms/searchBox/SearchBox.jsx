import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';
import { SearchIcon } from '../../assets';

const {
  SearchBoxOuter,
  SearchBoxChildrenContainer,
  SearchBoxButtonContainer,
  SearchBoxHoverContainer,
  SearchBoxHoverContainerOpen,
  SearchBoxHoverContainerClosed,
  SearchBoxInput,
} = styles;

function SearchBox({ children, onSearch }) {
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

  return (
    <div className={SearchBoxOuter}>
      <div className={SearchBoxChildrenContainer}>{children}</div>
      <button
        className={SearchBoxButtonContainer}
        type="button"
        onClick={handleSearchButtonClick}
        style={{ backgroundColor: isOpen ? 'var(--primaryColor)' : 'transparent' }}
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
            backgroundColor: isOpen ? 'var(--primaryColor)' : 'transparent',
            color: isOpen ? 'white' : 'transparent',
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
