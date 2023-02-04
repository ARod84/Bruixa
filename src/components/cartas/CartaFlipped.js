import React from 'react';
// Esrilos
import styles from '../../styles/Cartas.module.scss';

const CartaFlipped = ({
  title,
  image
}) => {
  return (
    <span className={styles.carta}>
      <img src={image} alt={title} className={styles.imagen} />
    </span>
  )
};

export default CartaFlipped;