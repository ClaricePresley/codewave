import styles from "./StoriesHope.module.css";

export function StoriesHope() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Histórias de esperança</h1>
      <span className={styles.experience}>Conheça as experiências de quem faz parte da nossa comunidade</span>

      <div className={styles.box}>
        <div className={styles.card}>
          <img src="/aspas.png" />

          <div className={styles.content}>
            <span className={styles.testimonials}>
              O Mãos Que Acolhem transformou completamente nossa rotina. 
              Aqui encontrei acolhimento, orientação e uma família que 
              caminha ao meu lado em cada desafio diário.
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
          <h3 className={styles.name}>Clarice Presley</h3>
          <span className={styles.role}>Mãe de Paciente</span>
        </div>

        <div className={styles.card}>
          <img src="/aspas.png" />

          <div className={styles.content}>
            <span className={styles.testimonials}>
              Nunca imaginei encontrar um espaço onde eu pudesse compartilhar 
              minhas dificuldades sem medo. Hoje me sinto mais forte e 
              preparado para apoiar minha família.
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
          <h3 className={styles.name}>João Lucas</h3>
          <span className={styles.role}>Irmão de Paciente</span>
        </div>


        <div className={styles.card}>
          <img src="/aspas.png" />

          <div className={styles.content}>
            <span className={styles.testimonials}>
              Participar do Mãos Que Acolhem foi um divisor de águas. 
              Aqui encontrei esperança, pessoas verdadeiras e apoio em 
              momentos que pareciam impossíveis de enfrentar sozinho.
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
          <h3 className={styles.name}>Iury Noronha</h3>
          <span className={styles.role}>Voluntário</span>
        </div>
      </div>
    </section>
  );
}
