import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// Componentes
import Lista from '../elements/lists/Lista';
// Estilos
import styles from '../../styles/Navigation.module.scss';

const BackDropView = ({
    view,
    mobile,
    handleClose
}) => {
  
  // Datos de las listas de links
  const listaTiradas = [
    {link: '/eneagrama', imagen: '/eneagrama-bd-list.jpg', titulo: 'Eneagrama'},
    {link: '/lenormand', imagen: '/lenormand-bd-list.jpg', titulo: 'Lenormand'},
    {link: '/tarot', imagen: '/tarot-bd-list.jpg', titulo: 'Tarot'}
  ];

  const listaPronosticos = [
    {link: '/grand-tableau', imagen: '/grand-tableau.jpg', titulo: 'Grand Tableau'},
    {link: '/cruz-celta', imagen: '/cruz-celta.png', titulo: 'Cruz Celta'}
  ];
  
  const listaTiendas = [
    {link: '/esoterics', imagen: '/esoterics.png', titulo: 'Esoterics'},
    {link: '/become', imagen: '/become.jpg', titulo: 'Cómo ser una Bruixa'}
  ];

  // Custom next arrow
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className={styles.brxArrow}
        style={{ ...style, 
                 display: "block", 
                 right: '15px',
                 opacity: '0.75',
                 borderRadius: '50%',
                 position: 'absolute',
                 width: '25px',
                 height: '25px',
                 top: '48%'
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleRight} size='2x' />
      </div>
    );
  }

  // Slider settings
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />
  };

  return (
    <React.Fragment>
        {!mobile ?
            <div className={styles.backdropView} onClick={handleClose}>
                {(view === 0) && <Lista lista={listaTiradas} />}
                {(view === 1) && <Lista lista={listaPronosticos} />}
                {(view === 2) && <Lista lista={listaTiendas} />}
            </div>
        :
            <Slider {...settings} className={styles.backdropViewMob}>
                <Lista lista={listaTiradas} mobile={true} handleClose={handleClose} />
                <Lista lista={listaPronosticos} mobile={true} handleClose={handleClose} />
                <Lista lista={listaTiendas} mobile={true} handleClose={handleClose} />
            </Slider>
        }
    </React.Fragment>
  )
}

export default BackDropView