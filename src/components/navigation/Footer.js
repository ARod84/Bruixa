import React from 'react';
import styles from '../../styles/Navigation.module.scss';

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
         <p className={styles.copyright}>Bruixa © {date}</p> 
    </footer>
  )
};

export default Footer;