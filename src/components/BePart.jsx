import React from "react";
import "../styles/BePart.css";
import { useNavigate } from "react-router-dom";

export default function BePart() {
  const navigate = useNavigate();


  return (
   <section className="familia-section">
  <div className="familia-container">
    <h2 className="familia-titulo">Faça Parte da Nossa Família</h2>

    <div className="cards-container">
      <div className="card">
        <h3>Seja Voluntário</h3>
        <p>Dedique seu tempo e habilidades para ajudar famílias que precisam.</p>
        <button onClick={() => navigate("/voluntario")}>Participar</button>
      </div>

      <div className="card">
        <h3>Faça uma doação</h3>
        <p>Ajudde-nos a continuar essa missão</p>
        <button onClick={() => navigate("/doacao")}>Doe Agora</button>
      </div>

      <div className="card">
        <h3>Apadrinhamento</h3>
        <p>Apadrinhe e transforme uma história
            
        </p>
        <button onClick={() => navigate("/apadrinhamento")}>Apadrinhar</button>
      </div>
    </div>
  </div>
</section>

  );
}
