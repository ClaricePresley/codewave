import "../styles/Footer.css"; 
import { Mail, Phone, MapPin } from "lucide-react"; 
import logo from "../assets/logo.png"


export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <p className="footer-item">
          <Mail size={16} /> maosqueacolhem@gmail.com
        </p>

        <p className="footer-item">
          <Phone size={16} /> (98) 98554-7655
        </p>

        <p className="footer-item">
          <MapPin size={16} /> São Luís, MA - Brasil
        </p>
      </div>

      <div className="footer-right">
        <p className="footer-title">Mãos que Acolhem</p>
         <img src={logo} alt="logo" />
      </div>

      <div className="footer-bottom">
        © 2025 Desenvolvido por Clarice Presley, João Lucas e Yuri Noronha
      </div>
    </footer>
  );
}
