import React from 'react';
import BigBox from '../components/elements/boxes/BigBox';
import SmallBoxLeft from '../components/elements/boxes/SmallBoxLeft';
import SmallBoxRight from '../components/elements/boxes/SmallBoxRight';
import styles from '../styles/Pages.module.scss';

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.home}>
        <BigBox
          title='Tarot Eneagrama'
          caption='Un análisis personal a través del tarot'
          product='/eneagrama.svg'
          layout='center'
          link='/eneagrama'
         />

        <SmallBoxRight
          title='Tarot Lenormand'
          caption='Tirada pasado-presente-futuro'
          product='/theKey.svg'
          link={'/lenormand'}
         />

        <SmallBoxLeft
          title='Tarot 3 cartas'
          caption='Tirada pasado-presente-futuro'
          product='/theSun.svg'
          link={'/tarot'}
        >
        </SmallBoxLeft>

      </div>
    </div>
  )
};

export default Home;