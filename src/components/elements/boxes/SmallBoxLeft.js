import React from 'react';
import styles from '../../../styles/Boxes.module.scss';
import { Link } from 'react-router-dom';

const SmallBoxLeft = ({
    title,
    caption,
    product,
    link
  }) => {
 

  return (
    <article className={styles.second}>
      <div className={styles.smallBoxLeft}>
        <div className={styles.left}>
          <Link to={link}>
              <h2 className={styles.sbTitle}>
                {title}
              </h2>
          </Link>
          <p className={styles.sbCaption}>{caption}</p>
        </div>
        <figure className={styles.figureWrapper}>
          <img
            src={product} alt={title} 
            className={styles.figure}
          />
        </figure>
      </div>
    </article>
  )
};

export default SmallBoxLeft;