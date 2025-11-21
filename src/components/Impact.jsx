import styles from "./Impact.module.css";

import './Impact.module.css';
import { Users,HandHeart, Handshake, Heart, } from 'lucide-react';

export function Impact() {
  return (
    <section className={styles.impactSection}>
      <h2>Nosso Impacto</h2>

      <p className={styles.description}>
        Cada número representa uma história de esperança, apoio e transformação
        na vida de famílias que enfrentam doenças raras.
      </p>
      

      
      <div className={styles.impactCards}>

         <div className={styles.card}>
           <Users color="white" size={48} />
          <h3>150+</h3>
          <p>Famílias Atendidas</p>
        </div>

        <div className={styles.card}>
           <HandHeart color="white" size={48} />
          <h3>80+</h3>
          <p>Voluntários Ativos</p>
        </div>

         <div className={styles.card}>
           <Handshake color="white" size={48} />
          <h3>200+</h3>
          <p>Doadores Engajados</p>
        </div>

         <div className={styles.card}>
           <Heart color="white" size={48} />
          <h3>50+</h3>
          <p>Projetos</p>
        </div>
      </div>
    </section>
  );
}

export default Impact;
