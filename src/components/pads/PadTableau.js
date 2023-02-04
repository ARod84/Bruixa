import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import lenordata from '../../data/lenordata';
// Estilos
import styles from '../../styles/Tiradas.module.scss';

const PadTableau = ({
  mobile
}) => {
  // Position
  const pos = {
      transform: 'translateX(300%)'
  };

  const mobPos = {
    transform: 'translateX(210.5%)'
  };

  return (
    <div className={mobile ? styles.mobPadTableau : styles.padTableau}>
        {lenordata.cards.map(( pad, index ) => (
          <React.Fragment key={uuidv4()}>
            {mobile ? (
                <div className={styles.mobPad} style={(index >= 32) ? mobPos : null} key={uuidv4()}>    
                </div>
            ):(
                <div className={styles.pad}
                    style={(index >= 32) ? pos : null} key={uuidv4()}>    
                </div>)}
          </React.Fragment>
        ))}
    </div>
  )
};

export default PadTableau;