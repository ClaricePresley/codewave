
import './Impact.css';
export function Impact() {
  return (
    <section className="impact-section">
      <h2>Nosso Impacto</h2>
      <p>
        Cada número representa uma história de esperança, apoio e transformação
        na vida de famílias que enfrentam doenças raras.
      </p>

      <div className="impact-cards">
        <div className="card">
          <div className="icon">👨‍👩‍👧</div>
          <h3>150+</h3>
          <p>Famílias Atendidas</p>
        </div>

        <div className="card">
          <div className="icon">👨‍👩‍👧</div>
          <h3>200+</h3>
          <p>Famílias Atendidas</p>
        </div>

        <div className="card">
          <div className="icon">👨‍👩‍👧</div>
          <h3>50+</h3>
          <p>Famílias Atendidas</p>
        </div>

        <div className="card">
          <div className="icon">👨‍👩‍👧</div>
          <h3>30+</h3>
          <p>Famílias Atendidas</p>
        </div>
      </div>
    </section>
  );
}

export default Impact;