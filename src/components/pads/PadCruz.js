import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MazoTarot from '../mazos/MazoTarot';
// Estilos
import styles from '../../styles/Tiradas.module.scss';

const PadCruz = ({
  mobile
}) => {
  // Pads length
  const pads = [0,1,2,3,4,5,6,7,8,9];

  // Grid position
  const crossUp = {
      gridColumn: '2/2'
  };

  const crossMid1 = {
    gridColumn: '1/1',
    gridRow: '2/2'
  };

  const crossMid2 = {
    gridColumn: '2/2',
    gridRow: '2/2'
  };

  const crossMid3 = {
    gridColumn: '3/3',
    gridRow: '2/2'
  };

  const crossMid4 = {
    gridColumn: '2/2',
    gridRow: '2/2',
    transform: 'rotate(90deg)'
  };

  const crossDown = {
    gridColumn: '2/2',
    gridRow: '3/3'
  };

  const crossColumn1 = {
    gridColumn: '4/4',
    gridRow: '1/1'
  };

  const crossColumn2 = {
    gridColumn: '4/4',
    gridRow: '2/2'
  };

  const crossColumn3 = {
    gridColumn: '4/4',
    gridRow: '3/3'
  };

  const crossColumn4 = {
    gridColumn: '4/4',
    gridRow: '4/4'
  };

  return (
    <div className={styles.mazoDeck}>
        <div className={styles.padCruz}>
          {pads.map((pad, index) => (
            <React.Fragment key={uuidv4()}>
                {(index === 0) && 
                    <div className={!mobile ? styles.pad : styles.mobPad} 
                         style={crossUp} 
                         key={uuidv4()}>
                    </div>
                }
                {(index === 1) && 
                    <div className={!mobile ? styles.pad : styles.mobPad} 
                         style={crossMid1} 
                         key={uuidv4()}>
                    </div>
                }
                {(index === 2) && 
                    <div className={!mobile ? styles.pad : styles.mobPad} 
                         style={crossMid2} 
                         key={uuidv4()}>
                    </div>
                }
                {(index === 3) && 
                    <div className={!mobile ? styles.pad : styles.mobPad} 
                        style={crossMid3} 
                        key={uuidv4()}>
                    </div>
                }
                {(index === 4) && 
                    <div className={!mobile ? styles.pad : styles.mobPad} 
                         style={crossDown} 
                         key={uuidv4()}>
                    </div>
                }
                {(index === 5) && 
                    <div className={!mobile ? styles.pad : styles.mobPad} 
                         style={crossColumn1} 
                         key={uuidv4()}>
                    </div>
                }
                {(index === 6) && 
                    <div className={!mobile ? styles.pad : styles.mobPad} 
                         style={crossColumn2} 
                         key={uuidv4()}>
                    </div>
                }
                {(index === 7) && 
                    <div className={!mobile ? styles.pad : styles.mobPad} 
                         style={crossColumn3} 
                         key={uuidv4()}>
                    </div>
                }
                {(index === 8) && 
                    <div className={!mobile ? styles.pad : styles.mobPad} 
                         style={crossColumn4} 
                         key={uuidv4()}>
                    </div>
                }
                {(index === 9) && 
                    <div className={!mobile ? styles.pad : styles.mobPad} 
                         style={crossMid4} 
                         key={uuidv4()}>
                    </div>
                }
            </React.Fragment>
          ))}
        </div>
        <MazoTarot/>
    </div>
  )
};

export default PadCruz;