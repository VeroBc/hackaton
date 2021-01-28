import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebookSquare, faYoutube } from "@fortawesome/fontawesome-free-brands";
// import {
//   Link
// } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-contenedor">
      <div className="footer-container">
          <div> <img src="https://i.ibb.co/8gDCgXw/logo-ultimo.jpg" alt="logo-ultimo" border="0" className= "logo"></img></div>
         
        <div>
          <ul>
            <li>L´bel</li>
            <li>Ésika</li>
            <li>Cyzone</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Terminos y condiones</li>
            <li>Condiciones de uso web</li>
            <li>Quiz Capevedi</li>
            <li>Contáctanos</li>
          </ul>
          </div>

          <div>
          <ul>
            <li>Política de privacidad y cookies</li>
            <li>Codigo de etica Beautycorp</li>
            <li>Pedidos y Devoluciones</li>
            <li>Búsqueda Avanzada</li>
          </ul>
        </div>
        <div className= "icon-container">
          <div>
          <a href="https://www.instagram.com/belcorpcorporativo/?hl=es-la"className="router-icon"><FontAwesomeIcon className="router-icon" icon={faInstagram} /></a>
          <a href="https://www.facebook.com/BelcorpCorporativo/"className="router-icon"><FontAwesomeIcon className ='router-icon' icon={faFacebookSquare} /></a>
          <a href="https://www.youtube.com/user/somosbelcorp"className="router-icon"><FontAwesomeIcon className ='router-icon' icon={faYoutube} /></a>
            </div>
            </div>

</div>
<div className="cont-img-tarj"><img src="https://i.ibb.co/hmQvjmc/tarjetas.jpg" alt="tarjetas" border="0"className="img-tarjetas"></img></div>

      <div className="footer-div">
      <footer><h4 className="h4-footer">© 2020 Beautycorp Todos los derechos reservados</h4></footer>
      </div>
      
    </div>
  );
};
