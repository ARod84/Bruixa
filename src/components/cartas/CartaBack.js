import React, { useRef, useEffect } from 'react';
import { gsap, Draggable } from 'gsap/all';
import styles from '../../styles/Cartas.module.scss';

const CartaBack = ({
    isActive,
    clickCard,
    position,
    index
}) => {

  // Register Draggable plugin
  gsap.registerPlugin(Draggable);

  // Ref for draggable element
  const dragInstance = useRef(null);
  const dragTarget = useRef(null);

  const handleCard = () => {
    !isActive && clickCard(index);
  }
  useEffect(() => {

    

    //eslint-disable-next-line
    dragInstance.current = Draggable.create(dragTarget.current, {
      type:"x,y",
      /*onDragEnd () {
        handleCard();
      }*/
    });
  }, []);

  

  return (
    <span
      onClick={handleCard}
      ref={dragTarget}
      className={`${styles.carta} 
      ${isActive ? styles.card : styles.back}`} 
      style={position}>
    </span>
  )
};

export default CartaBack;