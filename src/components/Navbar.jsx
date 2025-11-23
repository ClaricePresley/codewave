import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`menu ${isOpen ? "active" : ""}`}>
        <li><a href="#quem-somos" onClick={() => setIsOpen(false)}>Quem Somos</a></li>
        <li><a href="#impact" onClick={() => setIsOpen(false)}>Nosso Impacto</a></li>
        <li><a href="#stories-hope" onClick={() => setIsOpen(false)}>Depoimentos</a></li>
        <li><a href="#contato" onClick={() => setIsOpen(false)}>Faça Parte</a></li>
        <li><a href="#footer" onClick={() => setIsOpen(false)}>Contatos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
