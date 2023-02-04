import React from 'react';
// Components
import CartaBack from './CartaBack';
import CartaFlipped from './CartaFlipped';


const Carta = ({
  index,
  title,
  image,
  clickCard,
  isActive,
  ver
}) => {

  const position = {
    marginLeft: '-28px',
    zIndex: 1
  };

  return (
    <React.Fragment>
    { !ver ? (
      <CartaBack
        isActive={isActive}
        clickCard={clickCard}
        index={index}
        position={position}
        />
    ):( 
      <React.Fragment>
        {isActive ? (
        <CartaFlipped 
          image={image}
          title={title}
          />
        ):(
          null
        )}
      </React.Fragment>
    )}
    </React.Fragment>
  )
};

export default Carta;