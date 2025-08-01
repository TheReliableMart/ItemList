import React from 'react';
import styles from './Footer.module.css';



function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p>
          {/* <a href="https://chat.whatsapp.com/C4fQhFyWbTC0vQkcJqeA7V" className={`text-white mx-3 ${styles.anker}`} target="_blank" rel="noopener noreferrer" >
      <FontAwesomeIcon icon={faWhatsapp} size="2x"/></a> */}
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
