import React from 'react';
import { Link } from 'react-router-dom';
// Estilos
import styles from '../../styles/Navigation.module.scss';

const Logo = () => {
  return (
    <Link to={'/'}>
        <h1 className={styles.title}>
            Bruixa
        </h1>
    </Link>
  )
};

export default Logo;