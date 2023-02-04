import React from 'react'
import styles from '../../../styles/Buttons.module.scss'


const VerCartas = ({
  click,
  mobile
}) => {
  
  return (
    <button 
      className={mobile ? styles.mobBtnVer : styles.btnVer}
      onClick={click}>
      Ver Cartas
    </button>
  )
};

export default VerCartas;