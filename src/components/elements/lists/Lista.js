import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListaItem from './ListaItem';
// Estilos
import styles from '../../../styles/Listas.module.scss';

const Lista = ({
    lista,
    mobile,
    handleClose
}) => {
  return (
    <div className={ mobile ? `${styles.listaMob}` : `${styles.lista}`} onClick={handleClose}>
        { lista.map((item) => (
          <ListaItem item={item} key={uuidv4()} />
        ))}
    </div>
  )
};

export default Lista;