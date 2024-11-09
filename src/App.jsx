



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

  useEffect(() => {
    const checkDiscountPeriod = () => {
      const now = new Date();
      const discountStart = new Date(now.getFullYear(), 10, 11, 0, 0); // Nov 11, 12:00 PM
      const discountEnd = new Date(now.getFullYear(), 10, 11, 23, 59); // Nov 11, 11:59 PM

      // Apply discount only within this period
      if (now >= discountStart && now <= discountEnd) {
        setApplyDiscountToAll(true);
      } else {
        setApplyDiscountToAll(false);
      }
    };

    checkDiscountPeriod();

    // Check every minute to update discount status
    const intervalId = setInterval(checkDiscountPeriod, 60000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <div className="col-12">
          <ProductButtons
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            applyDiscountToAll={applyDiscountToAll}
          />

          <ProductTable
            selectedCategory={selectedCategory}
            applyDiscountToAll={applyDiscountToAll}
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




// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import ProductTable from './components/ProductTable';
// import Footer from './components/Footer';
// import ProductButtons from './components/ProductButtons';
// import styles from './App.module.css';

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all'); // State for selected category
//   const [applyDiscountToAll, setApplyDiscountToAll] = useState(false); // State for applying discount to all

//   return (
//     <div className={styles.container}>
//       <Header /> {/* Header component */}

//       <main className={styles.content}> {/* Main content area */}
//         <div className="col-12">
//           {/* Product Buttons with category selection and discount control */}
//           <ProductButtons
//             onSelectCategory={setSelectedCategory}
//             selectedCategory={selectedCategory}
//             applyDiscountToAll={applyDiscountToAll}
//           />



//           {/* Product Table filtered by selected category and discount status */}
//           <ProductTable
//             selectedCategory={selectedCategory}
//             applyDiscountToAll={applyDiscountToAll}
//           />
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <Footer /> {/* Footer component */}
//       </footer>
//     </div>
//   );
// };

// export default App;
