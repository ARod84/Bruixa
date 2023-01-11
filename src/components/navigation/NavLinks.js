import React from 'react';
import styles from '../../styles/Navigation.module.scss';

const NavLinks = ({
  handleOpen,
  open
}) => {

  return (
    <ul className={`${styles.links} ${open ? styles.link : ''}`}>
      <li onMouseEnter={handleOpen}>Tiradas</li>
      <li onMouseEnter={handleOpen}>Pronóstico</li>
      <li onMouseEnter={handleOpen}>Regalos</li>
    </ul>
  )
};

export default NavLinks;