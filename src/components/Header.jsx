import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      
      <h1>The Reliable Mart</h1>
      <p className={styles.para}>Where the Quality Matters</p>
    </header>
  );
}

export default Header;
