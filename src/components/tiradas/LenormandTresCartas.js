import React from 'react';
import PadTresCartas from '../pads/PadTresCartas';
// Estilos
import styles from '../../styles/Tiradas.module.scss';
import MazoLenormand from '../mazos/MazoLenormand';

const LenormandTresCartas = ({
  mobile
}) => {

  return (
    <React.Fragment>
      {mobile ?
        <div className={styles.mobileMazoDeck}>
          <div className={styles.malu}>
            <PadTresCartas />
          </div>
          <div className={styles.malu}>
            <MazoLenormand />
          </div>
        </div> : 
        <div className={styles.mazoDeck}>
          <div className={styles.malu}>
            <PadTresCartas />
          </div>
          <div className={styles.malu}>
            <MazoLenormand />
          </div>
         </div>
      }
    </React.Fragment>
  )
};

export default LenormandTresCartas;