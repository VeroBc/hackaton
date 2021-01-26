import React from 'react';
import { Home } from './components/home';
import { Nosotros } from './components/nosotros';
import { Marcas } from './components/nuestrasMarcas';
import { Category } from './components/category';
import { Promociones } from './components/promociones';
import { Contacto } from './components/contacto';
// import { Restaurant } from './components/restaurant';
// import { Signin } from './components/signin';
// import { Signup } from './components/signup';
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
        <nav>
           <Link to="/">Home</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/nuestrasMarcas">Nuestras Marcas</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/promociones">Promociones</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
            
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/nuestrasMarcas">
            <Marcas />
          </Route>
          <Route path="/categorias">
            <Category />
          </Route>
          <Route path="/promociones">
            <Promociones />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

