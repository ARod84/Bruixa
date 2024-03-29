import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { VerCartasContext } from '../../context/actions/VerCartasContext';
// Components
import lenordata from'../../data/lenordata';
import Carta from '../cartas/Carta';
import VerCartas from '../elements/buttons/VerCartas';
// Estilos
import styles from '../../styles/Tiradas.module.scss';


const MazoLenormand = () => {
    const [ver, setVer] = useState(false);

    const [openCards, setOpenCards] = useState([]);
  
    const handleClick = (index) => {
      if (openCards.length <= 2) {
        setOpenCards((prev) => [...prev, index]);
      } else {
        setOpenCards([index]);
      }
    };
  
    const checkIsOpen = (index) => {
      return openCards.includes(index)
    };
  
    const handleVer = () => {
      if (openCards.length === 3) {
        setVer(true);
      } else {
        alert("Debes seleccionar 3 cartas");
      }
    };


    return (
      <VerCartasContext.Provider value={[ver, setVer]}>
        <div className={styles.mazoWrapper}>
          <div className={styles.mazoTarot}>
            {lenordata.cards.map((card, index) => (
                <Carta 
                  key={uuidv4()} 
                  title={card.title} 
                  clickCard={handleClick} 
                  index={index}
                  image={card.imagen}
                  isActive={checkIsOpen(index)}
                  ver={ver}
                />
            ))}
          </div>
          <VerCartas 
            click={handleVer} 
          />
        </div>
      </VerCartasContext.Provider>
    )
};

export default MazoLenormand;