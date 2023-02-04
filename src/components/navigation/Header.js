import React, { useState } from 'react';
// React Responsive
import MediaQuery from 'react-responsive';
// Components
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import BackDrop from '../navigation/BackDrop';
import Logo from '../../components/navigation/Logo';
import Hamburger from '../elements/buttons/Hamburger';
// Estilos
import styles from '../../styles/Navigation.module.scss';

const Header = () => {
  // Set open backdrop for desktop
  const [openBD, setOpenBD] = useState(false);

  const handleOpen = () => {
    setOpenBD(true);
  };

  const handleClose = () => {
    setOpenBD(false);
  };

  // Set backdrop list view
  const [view, setView] = useState(null);

  // Handler for views on nav items
  const handleView = (e) => {
    setView(e.target.value)
  };

  return (
    <React.Fragment>
        {/** Desktop and laptops */}
        <MediaQuery minWidth={1024}>
        {/* Is backdrop open? */}
        { openBD ? 
          <BackDrop
            handleOpen={handleOpen}
            handleClose={handleClose}
            mobile={false}
            view={view}
            /> 
          : null /* If not null */}

          {/* Navlinks section */}
          <div className={styles.header}>
              <nav className={styles.navLinks} style={{zIndex: 99999}}>
                  <NavLinks 
                    handleOpen={handleOpen}
                    handleView={handleView}
                    open={openBD}
                  />
              </nav>
              <Logo />
              <div className={styles.dlLinks}>
                <Link to='/become'>
                  Se una Bruixa
                </Link>
              </div>
          </div>
          {/** End of navlinks section */}
        </MediaQuery>

        {/** Tablets and smartphones */}
        <MediaQuery maxWidth={1023}>
            {/* Is backdrop open? */}
            { openBD ? 
              <BackDrop
                handleOpen={handleOpen}
                handleClose={handleClose}
                view={view}
                mobile={true}
                /> 
            : null /* If not null */}

            {/* Navlinks section */}
            <div className={styles.mobileHeader}>
                <Logo />
                <Hamburger handleOpen={handleOpen} />
            </div>
            {/** End of navlinks section */}
        </MediaQuery>
      </React.Fragment>
  )
};

export default Header;