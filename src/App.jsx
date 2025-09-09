
// // App.jsx
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import ProductTable from './components/ProductTable';
// import Footer from './components/Footer';
// import ProductButtons from './components/ProductButtons';
// import SearchBar from './components/SearchBar'; // Added import for SearchBar
// import styles from './App.module.css';

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [applyDiscountToAll, setApplyDiscountToAll] = useState(false);
//   const [searchTerm, setSearchTerm] = useState(''); // Added state for searchTerm

//   useEffect(() => {
//     const checkDiscountPeriod = () => {
//       const now = new Date();
//       const discountStart = new Date(now.getFullYear(), 10, 11, 0, 0); // Nov 11, 12:00 PM
//       const discountEnd = new Date(now.getFullYear(), 10, 12, 0, 0); // Nov 11, 11:59 PM

//       // Apply discount only within this period
//       if (now >= discountStart && now <= discountEnd) {
//         setApplyDiscountToAll(true);
//       } else {
//         setApplyDiscountToAll(false);
//       }
//     };

//     checkDiscountPeriod();

//     // Check every minute to update discount status
//     const intervalId = setInterval(checkDiscountPeriod, 60000);

//     return () => clearInterval(intervalId); // Cleanup interval on unmount
//   }, []);

//   return (
//     <div className={styles.container}>
//       <Header />
//       <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> {/* Added SearchBar component */}

//       <main className={styles.content}>
//         <div className="col-12">
//           <ProductButtons
//             onSelectCategory={setSelectedCategory}
//             selectedCategory={selectedCategory}
//             applyDiscountToAll={applyDiscountToAll}
//           />

//           <ProductTable
//             selectedCategory={selectedCategory}
//             applyDiscountToAll={applyDiscountToAll}
//             searchTerm={searchTerm} /* Passed searchTerm to ProductTable */
//           />
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProductTable from './components/ProductTable';
import Footer from './components/Footer';
import ProductButtons from './components/ProductButtons';
import styles from './App.module.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [applyDiscountToAll, setApplyDiscountToAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [resetSearch, setResetSearch] = useState(false); // Added for search reset

  useEffect(() => {
    const checkDiscountPeriod = () => {
      const now = new Date();
      const discountStart = new Date(now.getFullYear(), 10, 11, 0, 0); // Nov 11, 12:00 AM
      const discountEnd = new Date(now.getFullYear(), 10, 12, 0, 0); // Nov 12, 12:00 AM

      if (now >= discountStart && now <= discountEnd) {
        setApplyDiscountToAll(true);
      } else {
        setApplyDiscountToAll(false);
      }
    };

    checkDiscountPeriod();
    const intervalId = setInterval(checkDiscountPeriod, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Reset search term when category changes or after viewing results
  useEffect(() => {
    setResetSearch(true); // Trigger reset when selectedCategory changes
  }, [selectedCategory]);

  // Clear resetSearch flag after it's used
  useEffect(() => {
    if (resetSearch) {
      setResetSearch(false);
    }
  }, [resetSearch]);

  // Function to close search bar
  const closeSearchBar = () => {
    setIsSearchOpen(false);
    setResetSearch(true); // Reset search when closing the search bar
  };

  return (
    <div className={styles.container}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        resetSearch={resetSearch} // Pass resetSearch to Header
      />
      <main className={styles.content}>
        <div className="col-12">
          <ProductButtons
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            applyDiscountToAll={applyDiscountToAll}
            closeSearchBar={closeSearchBar}
          />
          <ProductTable
            selectedCategory={selectedCategory}
            applyDiscountToAll={applyDiscountToAll}
            searchTerm={searchTerm}
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default App;