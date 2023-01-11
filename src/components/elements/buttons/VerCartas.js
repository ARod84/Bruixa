import React from 'react'
import styles from '../../../styles/Buttons.module.scss'


const VerCartas = ({click}) => {
  
  return (
    <button 
      className={styles.btnVer}
      onClick={click}>
      Ver Cartas
    </button>
  )
};

export default VerCartas;