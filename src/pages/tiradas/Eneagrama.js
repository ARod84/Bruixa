import React from 'react';
import MediaQuery from 'react-responsive';
// Estilos
import styles from '../../styles/Pages.module.scss';
import TarotEneagrama from '../../components/tiradas/TarotEneagrama';

const Eneagrama = () => {
  return (
    <article className={styles.page}>
        <MediaQuery minWidth={1024}>
            <TarotEneagrama mobile={false} />
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
            <TarotEneagrama mobile={true} />
        </MediaQuery>
    </article>
  )
};

export default Eneagrama;