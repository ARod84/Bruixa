import React from 'react';
import MediaQuery from 'react-responsive';
import TresCartas from '../../components/tiradas/TresCartas';
import styles from '../../styles/Pages.module.scss';

const Tarot = () => {

  return (
    <article className={styles.page}>
        <MediaQuery minWidth={1024}>
            <TresCartas mobile={false} />
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
            <TresCartas mobile={true} />
        </MediaQuery>
    </article>
  )
};

export default Tarot;