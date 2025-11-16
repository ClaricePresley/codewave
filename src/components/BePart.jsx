import React from "react";
import "../styles/BePart.css";

export default function BePart() {
  const abrirWhatsApp = (mensagem) => {
    const numero = "5598985547655"; 
    const texto = encodeURIComponent(mensagem);
    const url =` https://wa.me/${numero}?text=${texto}`;
    window.open(url, "_blank");
  };

  // Função para rolar suavemente até a seção do formulário
  const rolarParaFormulario = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contato" className="family-section">
      <div className="family-container">
        <h2 className="family-titulo">Faça Parte da Nossa Família</h2>

        <div className="cards-container">
         
          <div className="card">
            <h3>Seja Voluntário</h3>
            <p>Dedique seu tempo e habilidades para ajudar famílias que precisam.</p>
            <button onClick={rolarParaFormulario}>Participar</button>
          </div>

        
          <div className="card">
            <h3>Faça uma doação</h3>
            <p>Ajude-nos a continuar essa missão</p>
            <button
              onClick={() =>
                abrirWhatsApp("Olá! Gostaria de fazer uma doação para o projeto Mãos que Acolhem.")
              }
            >
              Doe Agora
            </button>
          </div>


          <div className="card">
            <h3>Apadrinhamento</h3>
            <p>Apadrinhe e transforme uma história</p>
            <button
              onClick={() =>
                abrirWhatsApp("Olá! Tenho interesse em apadrinhar uma criança pelo projeto Mãos que Acolhem.")
              }
            >
              Apadrinhar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}