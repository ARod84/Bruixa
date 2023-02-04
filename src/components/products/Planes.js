import React, { useState } from 'react';
import Switch from '../../components/elements/switches/Switch';
// Estilos
import styles from '../../styles/Products.module.scss';

const Planes = () => {
  // Switch state
  const [anual, setAnual] = useState();

  // Handle switch state
  const handleSwitch = (e) => {
      setAnual(e.target.value);
  };

  return (
    <article className={styles.becomeTable}>
        <Switch active={handleSwitch} />
        <section>
            {anual === 0 ? <div>Tabla 1</div> : <div> Tabla 2 </div>}
        </section>
    </article>
  )
};

export default Planes;