import styles from "./StoriesHope.module.css";

export function StoriesHope() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Histórias de Esperança</h1>
      <span>Conheça as experiências de quem faz parte da nossa comunidade</span>

      <div className={styles.box}>
        <div className={styles.card}>
          <img src="/aspas.png" />

          <div className={styles.content}>
            <span className={styles.testimonials}>
              O Mãos Que Acolhem mudou nossa vida. Encontramos não apenas apoio
              prático mas uma família que nos compreende e nos fortalece todos
              os dias
            </span>

            <div className={styles.starBox}>
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
            </div>

            <div className={styles.separator} />
          </div>
          <h3 className={styles.name}>Lutriz</h3>
          <span className={styles.role}>Pai de Paciente</span>
        </div>

        <div className={styles.card}>
          <img src="/aspas.png" />

          <div className={styles.content}>
            <span className={styles.testimonials}>
              O Mãos Que Acolhem mudou nossa vida. Encontramos não apenas apoio
              prático mas uma família que nos compreende e nos fortalece todos
              os dias
            </span>

            <div className={styles.starBox}>
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
            </div>

            <div className={styles.separator} />
          </div>
          <h3 className={styles.name}>Lutriz</h3>
          <span className={styles.role}>Pai de Paciente</span>
        </div>

        <div className={styles.card}>
          <img src="/aspas.png" />

          <div className={styles.content}>
            <span className={styles.testimonials}>
              O Mãos Que Acolhem mudou nossa vida. Encontramos não apenas apoio
              prático mas uma família que nos compreende e nos fortalece todos
              os dias
            </span>

            <div className={styles.starBox}>
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
              <img src="/star.svg" alt="Ícone de estrela" />
            </div>

            <div className={styles.separator} />
          </div>
          <h3 className={styles.name}>Lutriz</h3>
          <span className={styles.role}>Pai de Paciente</span>
        </div>
      </div>
    </section>
  );
}
