import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './services/firebase';

import { getCurrentUser } from './services/backend';
import { UserContext } from './components/userContext';

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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram } from "@fortawesome/fontawesome-free-brands";
import {faFacebookSquare } from "@fortawesome/fontawesome-free-brands";
import {faWhatsapp } from "@fortawesome/fontawesome-free-brands";
import {faYoutube } from "@fortawesome/fontawesome-free-brands";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';


export const App = () => {

  const [user, setUser]= useState(null);

  const currentUser = useContext(UserContext);

  const getUserData = (dataUser) => {
    getCurrentUser(dataUser).then((userData) => {
      return setUser(userData);
    });
  }

  const [orderList, setOrderList] = useState([]);

  const addItemToOrder = (item) =>  {
    setOrderList([...orderList, item]);
  }

   const deleteItemFromOrder = (item) => {
    const tempArray = orderList.filter(itemInOrderList => itemInOrderList.id !== item.id );        
    setOrderList(tempArray);
  }
  // useEffect(() => subscribeOrder(setOrderList), []) 


  useEffect(() => getUserData(currentUser), [currentUser])

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
            <Link to="/cart"><FontAwesomeIcon className ='icon' icon={faShoppingCart}/><div className ='quantity'>{orderList.length}</div></Link>
            <FontAwesomeIcon className='signOutIcon' onClick={()=> signOut()} icon={faSignOutAlt} />
            {user && <p>{user.name}</p>}
        </nav>
        <Switch>

          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/nuestrasMarcas">
            <NuestrasMarcas user={user} addItemToOrder={addItemToOrder} deleteItemFromOrder={deleteItemFromOrder} orderList={orderList} />
          </Route>
          <Route path="/categorias">
            <SelectCategory user={user} addItemToOrder={addItemToOrder} deleteItemFromOrder={deleteItemFromOrder} orderList={orderList}/>
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
            <OrderCart orderList={orderList} deleteItemFromOrder={deleteItemFromOrder} />
          </Route>
          <Route path="/payment">
            <Payment orderList={orderList}/>
          </Route>
          <Route path="/">
            <Home/>
            <SelectCategory user={user} addItemToOrder={addItemToOrder} deleteItemFromOrder={deleteItemFromOrder} orderList={orderList}/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

