import React from 'react';
import { Home } from './components/home';
import { Nosotros } from './components/nosotros';
import { Marcas } from './components/nuestrasMarcas';
import { SelectCategory } from './components/selectCategory';
import { Promociones } from './components/promociones';
import { Contacto } from './components/contacto';
import { Signup } from './components/signup';
import { Signin } from './components/signin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram } from "@fortawesome/fontawesome-free-brands";
import {faFacebookSquare } from "@fortawesome/fontawesome-free-brands";
import {faWhatsapp } from "@fortawesome/fontawesome-free-brands";
import {faYoutube } from "@fortawesome/fontawesome-free-brands";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './services/firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export const App = () => {
  return (
    <Router>
      <div>
      <div className="icon-container">
        <FontAwesomeIcon className= "icons-redes"icon={faFacebookSquare}/>{" "}
        <FontAwesomeIcon className= "icons-redes"icon={faInstagram}/>{" "}
        <FontAwesomeIcon className= "icons-redes"icon={faWhatsapp}/>{" "}
        <FontAwesomeIcon className= "icons-redes"icon={faYoutube}/>{" "}
      </div> 
        <nav>
            <Link to="/">Home</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/nuestrasMarcas">Nuestras Marcas</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/promociones">Promociones</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/signin"><FontAwesomeIcon className ='icon' icon={faUser} /></Link>
            <Link to="/cart"><FontAwesomeIcon className ='icon' icon={faShoppingCart} /></Link>
            
        </nav>
        <Switch>
          <Route exact path="/">
            <Home/>
            <SelectCategory />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/nuestrasMarcas">
            <Marcas />
          </Route>
          <Route path="/categorias">
            <SelectCategory />
          </Route>
          <Route path="/promociones">
            <Promociones />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
  
        </Switch>
      </div>
    </Router>
  );
}

