
import './Impact.css';
import { Users,HandHeart, Handshake, Heart, } from 'lucide-react';

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
          <div className="icon"> <Users color="white" size={48} /></div>
          <h3>150+</h3>
          <p>Famílias Atendidas</p>
        </div>

        <div className="card">
          <div className="icon"><HandHeart color="white" size={48}/></div>
          <h3>80+</h3>
          <p>Voluntários Ativos</p>
        </div>

        <div className="card">
          <div className="icon"><Handshake color="white" size={48}/></div>
          <h3>200+</h3>
          <p>Doadores Engajados</p>
        </div>

        <div className="card">
          <div className="icon"><Heart color="white" size={48}/></div>
          <h3>50+</h3>
          <p>Projetos</p>
        </div>
      </div>
    </section>
  );
}

export default Impact;