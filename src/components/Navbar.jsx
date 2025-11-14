import './Navbar.css';
import logo from "../assets/logo.png"
function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" />
      <ul className="menu">
        <li><a href="#home">Início</a></li>
        <li><a href="#sobre">Quem Somos</a></li>
        <li><a href="#impacto">Nosso Impacto</a></li>
        <li><a href="#depoimentos">Depoimentos</a></li>
        <li><a href="#façaparte">Faça parte</a></li>
        <li><a href="#contato">Contatos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
