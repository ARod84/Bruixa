import React, { useContext, useState } from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { BackDropContext } from '../../context/navigation/BackDropContext';
import BackDrop from '../navigation/BackDrop';
import Logo from '../../components/navigation/Logo';
// Estilos
import styles from '../../styles/Navigation.module.scss';

const Header = () => {
  //eslint-disable-next-line
  const [openBD, setOpenBD] = useState(false);

  const handleOpen = () => {
    setOpenBD(true);
  };

  const handleClose = () => {
    setOpenBD(false);
  };

  const {open, setOpen} = useContext(BackDropContext);

  return (
    <BackDropContext.Provider value={{open, setOpen}}>
      { openBD ? 
        <BackDrop
          handleOpen={handleOpen}
          handleClose={handleClose}
          /> 
      : null}
      <div className={styles.header}>
          <nav className={styles.navLinks} style={{zIndex: 99999}}>
              <NavLinks handleOpen={handleOpen} open={openBD} />
          </nav>
          <Logo />
          <div className={styles.dlLinks}>
            <Link to='/'>
              Descarga la App
            </Link>
          </div>
      </div>
    </BackDropContext.Provider>
  )
};

export default Header;