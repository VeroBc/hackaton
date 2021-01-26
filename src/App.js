import React from 'react';
import { Home } from './components/home';
import { Nosotros } from './components/nosotros';
import { Marcas } from './components/nuestrasMarcas';
import { Category } from './components/category';
import { Promociones } from './components/promociones';
import { Contacto } from './components/contacto';
// import { Restaurant } from './components/restaurant';
import { Signup } from './components/signup';
import { Signin } from './components/signin';
import { About } from './components/about';
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
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">

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

