import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProductTable from './components/ProductTable';
import Footer from './components/Footer';
import ProductButtons from './components/ProductButtons';
import styles from './App.module.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // State for selected category

  return (
    <div className={styles.container}> 
      <Header /> {/* Header component */}
      
      <main className={styles.content}> {/* Main content area */}
        <div className="col-12">
          <ProductButtons onSelectCategory={setSelectedCategory} /> {/* Product buttons to select category */}
          <ProductTable selectedCategory={selectedCategory} /> {/* Product table filtered by selected category */}
        </div>
      </main>

      <footer className={styles.footer}>
        <Footer /> {/* Footer component */}
      </footer>
    </div>
  );
};

export default App;
