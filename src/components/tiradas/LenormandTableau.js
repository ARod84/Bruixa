import React from 'react';
import PadTableau from '../../components/pads/PadTableau';
import MazoLenormand from '../../components/mazos/MazoLenormand';
// Estilos
import styles from '../../styles/Tiradas.module.scss';

const LenormandTableau = ({
    mobile
}) => {
  return (
    <React.Fragment>
        {mobile ?
        <div className={styles.mobileMazoDeck}>
            <PadTableau mobile={mobile} />
            <MazoLenormand />
        </div> : 
        <div className={styles.mazoDeck}>
            <PadTableau />
            <MazoLenormand />
        </div>
        }
    </React.Fragment>
  )
}

export default LenormandTableau