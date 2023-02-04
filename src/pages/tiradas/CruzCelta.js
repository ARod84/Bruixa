import React from 'react';
import MediaQuery from 'react-responsive';
import PadCruz from '../../components/pads/PadCruz';
// Estilos
import styles from '../../styles/Pages.module.scss';

const CruzCelta = () => {
  return (
    <div className={styles.page}>
      <MediaQuery minWidth={1024}>
          <PadCruz mobile={false} />
      </MediaQuery>
      <MediaQuery maxWidth={1023}>
          <PadCruz mobile={true} />
      </MediaQuery>
    </div>
  )
};

export default CruzCelta;