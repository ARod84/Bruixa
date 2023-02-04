import React from 'react';
import MediaQuery from 'react-responsive';
import LenormandTableau from '../../components/tiradas/LenormandTableau';
// Estilos
import styles from '../../styles/Pages.module.scss';

const GrandTableau = () => {
  return (
    <div className={styles.page}>
        <MediaQuery minWidth={1024}>
            <LenormandTableau mobile={false} />
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
            <LenormandTableau mobile={true} />
        </MediaQuery>
    </div>
  )
};

export default GrandTableau;