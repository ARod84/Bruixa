import React from 'react';
import MediaQuery from 'react-responsive';
import LenormandTresCartas from '../../components/tiradas/LenormandTresCartas';
import styles from '../../styles/Pages.module.scss';

const Lenormand = () => {

  return (
    <article className={styles.page}>
        <MediaQuery minWidth={1024}>
            <LenormandTresCartas mobile={false} />
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
            <LenormandTresCartas mobile={true} />
        </MediaQuery>
    </article>
  )
};

export default Lenormand;