import React from 'react';
import styles from './Header.module.css'; // Assuming you're using CSS Modules

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.brandName}> Reliable Mart</h1>
      <p className={styles.description}>Where the Quality Matters</p>
    </header>
  );
}

export default Header;
