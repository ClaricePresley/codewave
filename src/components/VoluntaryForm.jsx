import { useState } from "react";
import "../styles/VoluntaryForm.css";
import contactImage from "../assets/contact-image.png";

export default function ContactSection() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [descricao, setDescricao] = useState("");

  // Funções separadas para atualizar cada campo
  function handleChangeNome(e) {
    setNome(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeDescricao(e) {
    setDescricao(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !email || !descricao) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const numeroWhatsApp = "5598985547655";
    const mensagem = `Olá! Tenho interesse em entrar em contato.
    Nome: ${nome}
    E-mail: ${email}
    Mensagem: ${descricao}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");

    // limpa formulário
    setNome("");
    setEmail("");
    setDescricao("");
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-imagem">
          <img
            src={contactImage}
            alt="Equipe acolhendo crianças"
            className="imagem-contato"
          />
        </div>

        <div className="contact-formulario">
          <h2 className="form-titulo">Entre em Contato</h2>
          <p className="form-subtitulo">
            Preencha o formulário e fale com a nossa equipe 💜
          </p>

          <form className="form-contact" onSubmit={handleSubmit}>
            
            <div className="form-grupo">
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={handleChangeNome}
                required
              />
            </div>

            <div className="form-grupo">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={handleChangeEmail}
                required
              />
            </div>

            <div className="form-grupo">
              <label htmlFor="descricao">Mensagem</label>
              <textarea
                id="descricao"
                rows="4"
                placeholder="Conte um pouco sobre como você pode contribuir..."
                value={descricao}
                onChange={handleChangeDescricao}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
