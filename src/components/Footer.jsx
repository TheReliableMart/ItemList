import React from 'react';
import styles from './Footer.module.css';



function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p>

          © 2024 The Reliable Mart. All rights reserved.
        </p>
        <p>
          A website by {' '}
          <a href="https://kashifnadeemkayani.github.io/Portfolio/" className={styles.anker}>Kashif Nadeem Kayani</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
