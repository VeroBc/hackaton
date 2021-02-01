import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './services/firebase';

// import { getCurrentUser } from './services/backend';
import { AppContext } from './services/appContext';

import { Home } from './components/home';
import { Nosotros } from './components/nosotros';
import { NuestrasMarcas } from './components/nuestrasMarcas';
import { SelectCategory } from './components/selectCategory';
import { Promociones } from './components/promociones';
import { Contacto } from './components/contacto';
import { Signup } from './components/signup';
import { Signin } from './components/signin';
import { OrderCart } from './components/orderCart';
import { Payment } from './components/payment';
import { signOut } from './services/auth';
import { Esika } from './components/esika';
import { Lbel } from './components/lbel';
import { Cyzone } from './components/cyzone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faInstagram } from "@fortawesome/fontawesome-free-brands";
// import {faFacebookSquare } from "@fortawesome/fontawesome-free-brands";
// import {faWhatsapp } from "@fortawesome/fontawesome-free-brands";
// import {faYoutube } from "@fortawesome/fontawesome-free-brands";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart, faSearch, faHeart, faUser, } from '@fortawesome/free-solid-svg-icons';
import { Footer } from './components/Footer'

import './App.css';


export const App = () => {

  const context = useContext(AppContext);

  // const HOMEPATH = window.location.href.includes("Hack") ? "/Hack" : "/" ;

  return (
    <Router>
      <div>
          <div style={{display: "flex",
                position: "fixed",
                backgroundColor: "white",
                zIndex: 5000,
                top:0,
                left: 0,
                right: 0}}>

            <div style={{flex:0.2, display: "flex", alignItems:"center", justifyContent:"center"}}>
              <img src="https://i.ibb.co/8gDCgXw/logo-ultimo.jpg" alt="logo-ultimo"  className= "logo"border="0"></img>
            </div>
            <div style={{flex:0.8, display: "flex", alignItems:"center", justifyContent:"space-evenly"}}>

              <Link className="routes-nav" to="/">Home</Link>
              <Link className="routes-nav" to="/nosotros">Nosotros</Link>
              <Link className="routes-nav" to="/nuestrasMarcas">Nuestras Marcas</Link>
              <Link className="routes-nav" to="/categorias">Categorías</Link>
              <Link className="routes-nav" to="/promociones">Promociones</Link>
              <Link className="routes-nav" to="/contacto">Contacto</Link>
              <Link to="/"className="routes-nav"><FontAwesomeIcon className ='icon' icon={faSearch} /></Link>
              <Link className="routes-nav" to="/signin"><FontAwesomeIcon className ='icon' icon={faUser} /></Link>
              <Link to="/signin"className="routes-nav"><FontAwesomeIcon className ='icon' icon={faHeart} /></Link>
              <Link className="routes-nav" to="/cart"><FontAwesomeIcon className ='icon' icon={faShoppingCart}/><div className ='quantity'>{context.orderList.length}</div></Link>
              <FontAwesomeIcon className='signOutIcon' onClick={()=> signOut()} icon={faSignOutAlt} />
              {context.currentUserData && <p>{context.currentUserData.name}</p>}
            </div>
          </div>    
          {/* </div>
        </header>  */}
        <Switch>

          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/nuestrasMarcas">
            <NuestrasMarcas/>
          </Route>
          <Route path="/categorias">
            <SelectCategory/>
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
          <Route path="/cart">
            <OrderCart/>
          </Route>
          <Route path="/payment">
            <Payment/>
          </Route>
          <Route path="/esika">
            <Esika />
          </Route>

          <Route path="/lbel">
            <Lbel />
          </Route>

          <Route path="/cyzone">
            <Cyzone />
          </Route>
          <Route path="/">
            <Home/>
            <SelectCategory/>
          </Route>
 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

