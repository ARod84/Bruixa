import React from 'react';
// Estilos
import styles from '../../../styles/Buttons.module.scss';

const Switch = ({
    active
}) => {
  return (
    <div onClick={active}>
      <ul className={styles.switch}>
        <li value='0'>Mensual</li>
        <li value='1'>Anual</li>
      </ul>
    </div>
  )
};

export default Switch;