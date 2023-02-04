import React from 'react';
import PadTresCartas from '../pads/PadTresCartas';
// Estilos
import styles from '../../styles/Tiradas.module.scss';
import MazoTarot from '../mazos/MazoTarot';

const TresCartas = ({
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
            <MazoTarot />
            </div>
        </div> : 
        <div className={styles.mazoDeck}>
          <div className={styles.malu}>
            <PadTresCartas />
            </div>

            <div className={styles.malu}>
            <MazoTarot />
            </div>

         </div>
      }
    </React.Fragment>
  )
};

export default TresCartas;