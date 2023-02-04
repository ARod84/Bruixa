import React from 'react';
// Estilos
import styles from '../../../styles/Buttons.module.scss';

const Hamburger = ({
  handleOpen
}) => {
  return (
    <div className={styles.hamburger} onClick={handleOpen}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
    </div>
  )
};

export default Hamburger;