import React from 'react';
// Estilos
import styles from '../../styles/Tiradas.module.scss';
// Componentes
import EneagramaSvg from '../elements/symbols/EneagramaSvg';
import MazoTarot from '../mazos/MazoTarot';

const TarotEneagrama = ({
  mobile
}) => {
  return (
    <React.Fragment>
        { mobile ?
            <section className={styles.mobileEneagrama}>
                <EneagramaSvg 
                  bg='circularGradient' 
                  size='xs'
                />
                <div className={styles.eneagramaMazo}>
                    <MazoTarot />
                </div>
            </section> 
            :
            <section className={styles.eneagrama}>
                <div className={styles.eneagramaPad}>
                    <EneagramaSvg 
                      bg='circularGradient' 
                      size='xl' 
                    />
                </div>
                <MazoTarot />
            </section> 
        }
    </React.Fragment>
  )
};

export default TarotEneagrama;