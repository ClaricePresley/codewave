import styles from "./Impact.module.css";

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
          <div className={styles.icon}>👨‍👩‍👧</div>
          <h3>150+</h3>
          <p>Famílias Atendidas</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>👨‍👩‍👧</div>
          <h3>200+</h3>
          <p>Famílias Atendidas</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>👨‍👩‍👧</div>
          <h3>50+</h3>
          <p>Famílias Atendidas</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>👨‍👩‍👧</div>
          <h3>30+</h3>
          <p>Famílias Atendidas</p>
        </div>
      </div>
    </section>
  );
}

export default Impact;
