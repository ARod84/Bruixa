import React from 'react';
import { Link } from 'react-router-dom';
// Estilos
import styles from '../../../styles/Listas.module.scss';

const ListaItem = ({
    item
}) => {
  return (
    <Link className={styles.listaItem} to={item.link}>
        <h3 className={styles.listaTitle}>
            {item.titulo}
        </h3>
        <img 
            className={styles.listaImg} 
            src={item.imagen} 
            alt={item.title} 
        />
    </Link>
  )
}

export default ListaItem