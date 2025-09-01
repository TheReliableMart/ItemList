// import React from 'react';
// import styles from './Header.module.css'; // Assuming you're using CSS Modules

// function Header() {
//   return (
//     <header className={styles.header}>
//       <h1 className={styles.brandName}>The Reliable Mart</h1>
//       <p className={styles.description}>Where the Quality Matters</p>
//     </header>
//   );
// }

// export default Header;



import React, { useEffect } from 'react';
import styles from './Header.module.css';
import searchStyles from './SearchBar.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header({ searchTerm, setSearchTerm, isSearchOpen, setIsSearchOpen }) {
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768 && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSearchOpen, setIsSearchOpen]);

  return (
    <header className={styles.header}>
      <h1 className={styles.brandName}>The Reliable Mart</h1>
      <p className={styles.description}>Where the Quality Matters</p>
      <div className={styles.searchContainer}>
        <button onClick={toggleSearch} className={styles.searchButton}>
          <i className="fas fa-search"></i>
        </button>
        {isSearchOpen && (
          <input
            type="text"
            placeholder="Search products (e.g., ANC Headphone)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`${searchStyles.searchInput} ${isSearchOpen ? searchStyles.expand : ''}`}
          />
        )}
      </div>
    </header>
  );
}

export default Header;