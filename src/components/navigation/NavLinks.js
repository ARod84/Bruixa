import React from 'react';
// Estilos
import styles from '../../styles/Navigation.module.scss';

const NavLinks = ({
  handleOpen,
  handleView,
  open
}) => {

  return (
    <ul className={`${styles.links} ${open ? styles.link : ''}`}>
      <li onMouseEnter={handleOpen} onMouseOver={handleView} value='0'>
        Tiradas
      </li>
      <li onMouseEnter={handleOpen} onMouseOver={handleView} value='1'>
        Pronóstico
      </li>
      <li onMouseEnter={handleOpen} onMouseOver={handleView} value='2'>
        Tienda
      </li>
    </ul>
  )
};

export default NavLinks;