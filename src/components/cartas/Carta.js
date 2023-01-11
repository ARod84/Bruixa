import React from 'react'
import styles from '../../styles/Cartas.module.scss'


const Carta = ({
  index,
  title,
  image,
  clickCard,
  isActive,
  ver
}) => {
  
  const handleCard = () => {
    !isActive && clickCard(index)
  }

  return (
    <React.Fragment>
    { !ver ?
      <li 
        onClick={handleCard} 
        className={`${styles.carta} ${isActive ? styles.card : styles.back}`} style={{zIndex: 1}}>
      </li>
    : 
      <React.Fragment>
        {isActive ? (
        <li className={styles.carta}>
          <img src={image} alt={title} className={styles.imagen} />
        </li>)
        : 
          null
        }
      </React.Fragment>
    }
    </React.Fragment>
  )
}

export default Carta