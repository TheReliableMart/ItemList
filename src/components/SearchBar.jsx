// // SearchBar.jsx
// import React from 'react';
// import styles from './SearchBar.module.css';

// const SearchBar = ({ searchTerm, setSearchTerm }) => {
//   return (
//     <div className={styles.searchContainer}>
//       <input
//         type="text"
//         placeholder="Search products (e.g., ANC Headphone)..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className={styles.searchInput}
//       />
//     </div>
//   );
// };

// export default SearchBar;

import React, { useRef, useEffect } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchTerm, setSearchTerm, resetSearch, isSearchOpen }) => {
  const inputRef = useRef(null);

  // Auto-select text when focusing the input
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  // Clear the search input
  const handleClear = () => {
    console.log('Clear button clicked'); // Debug log
    setSearchTerm('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Reset search term when resetSearch changes
  useEffect(() => {
    if (resetSearch) {
      setSearchTerm('');
    }
  }, [resetSearch, setSearchTerm]);

  // Debug log for searchTerm
  useEffect(() => {
    console.log('Search term:', searchTerm); // Verify searchTerm state
  }, [searchTerm]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search products (e.g., ANC Headphone)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={handleFocus}
        className={`${styles.searchInput} ${isSearchOpen ? styles.expand : ''}`}
        ref={inputRef}
      />
      {searchTerm && (
        <button
          className={styles.clearButton}
          onClick={handleClear}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;