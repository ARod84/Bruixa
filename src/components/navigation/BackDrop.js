import React from 'react';
// Componentes
import BackDropView from './BackDropView';
import Close from '../elements/buttons/Close';
import Logo from './Logo';
// Estilos
import styles from '../../styles/Navigation.module.scss';

const BackDrop = ({
  handleOpen,
  handleClose,
  mobile,
  view
}) => {
  return (
    <React.Fragment>
    {(mobile) ? (
      <div className={styles.mobileBackDrop} style={{zIndex: 999}}>
        <div className={styles.bdHeading}>
          <Logo />
          <Close handleClose={handleClose} />
        </div>
        <BackDropView 
          view={view}
          mobile={true}
          handleClose={handleClose}
          />
      </div>
       ):(
       <div className={styles.overlay} style={{zIndex: 999}}>
        <div className={styles.backDrop}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          >
          <BackDropView view={view} handleClose={handleClose} />
        </div>
      </div>
    )}
  </React.Fragment>
  )
};

export default BackDrop;