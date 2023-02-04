import React from 'react';
// Estilos
import styles from '../../../styles/Buttons.module.scss';

const Close = ({
  handleClose
}) => {
  return (
    <div className={styles.close} onClick={handleClose}>
        <div className={styles.closeBar}></div>
        <div className={styles.closeBar}></div>
    </div>
  )
};

export default Close;