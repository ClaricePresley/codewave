import styles from "../styles/StoriesHope.module.css";

export function StoriesHope() {
  return (
    <section id= "stories-hope" className={styles.container}>
      <h1 className={styles.title}>Histórias de esperança</h1>
      <span className={styles.experience}>Conheça as experiências de quem faz parte da nossa comunidade</span>

      <div className={styles.box}>
        <div className={styles.card}>
          <img src="/aspas.png" />

          <div className={styles.content}>
            <span className={styles.testimonials}>
              A cada doação, sinto que estou ajudando a transformar pequenas batalhas em grandes vitórias. É gratificante saber que minha contribuição faz diferença.
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
          <h3 className={styles.name}>Maria Lopes</h3>
          <span className={styles.role}>Doadora</span>
        </div>

        <div className={styles.card}>
          <img src="/aspas.png" />

          <div className={styles.content}>
            <span className={styles.testimonials}>
             Apadrinhar uma família mudou minha forma de enxergar o mundo. Criamos um vínculo real, cheio de carinho e aprendizado.
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
          <h3 className={styles.name}>Ricardo Menezes</h3>
          <span className={styles.role}>Padrinho de uma criança</span>
        </div>


        <div className={styles.card}>
          <img src="/aspas.png" />

          <div className={styles.content}>
            <span className={styles.testimonials}>
             Ser mãe de uma criança com deficiência é caminhar entre desafios diários, mas no Mãos que Acolhem eu encontrei apoio, acolhimento e força para continuar. Aqui, eu nunca estou sozinha.
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
          <h3 className={styles.name}>Carla Ribeiro</h3>
          <span className={styles.role}>Mãe</span>
        </div>
      </div>
    </section>
  );
}
