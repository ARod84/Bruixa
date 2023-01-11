import React from 'react';
import styles from '../../styles/Navigation.module.scss';

const BackDrop = ({
  handleOpen,
  handleClose
}) => {
  return (
    <div className={styles.overlay} style={{zIndex: 999}}>
      <div className={styles.backDrop}
        onMouseOver={handleOpen}
        onMouseLeave={handleClose}
        >
        BackDrop
      </div>
    </div>
  )
};

export default BackDrop;