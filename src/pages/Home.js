import React from 'react';
// React Responsive
import MediaQuery from 'react-responsive';
import BigBox from '../components/elements/boxes/BigBox';
import SmallBoxLeft from '../components/elements/boxes/SmallBoxLeft';
import SmallBoxRight from '../components/elements/boxes/SmallBoxRight';
import styles from '../styles/Pages.module.scss';

const Home = () => {
  return (
    <div className={styles.page}>
      <MediaQuery minWidth={1024}>
        <div className={styles.home}>
          <BigBox
            title='Tarot Eneagrama'
            caption='Un análisis personal a través del tarot'
            svg={true}
            layout='center'
            link='/eneagrama'
          />

          <SmallBoxRight
            title='Tarot Lenormand'
            caption='Tirada pasado-presente-futuro'
            product='/carta1.jpg'
            link={'/lenormand'}
          />

          <SmallBoxLeft
            title='Tarot 3 cartas'
            caption='Tirada pasado-presente-futuro'
            product='/carta2.jpg'
            link={'/tarot'}
          >
          </SmallBoxLeft>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1023}>
        <div className={styles.mobileHome}>
          <BigBox
            title='Tarot Eneagrama'
            caption='Un análisis personal a través del tarot'
            svg={true}
            layout='center'
            link='/eneagrama'
            mobile={true}
          />

          <BigBox
            title='Tarot Lenormand'
            caption='Tirada pasado-presente-futuro'
            product='/carta1.jpg'
            layout='center'
            link={'/lenormand'}
            mobile={true}
          />

          <BigBox
            title='Tarot 3 cartas'
            caption='Tirada pasado-presente-futuro'
            product='/carta2.jpg'
            layout='center'
            link={'/tarot'}
            mobile={true}
          />
        </div>
      </MediaQuery>
    </div>
  )
};

export default Home;