import React, { useState } from 'react';
import { Category } from './category';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram } from "@fortawesome/fontawesome-free-brands";
import {faFacebookSquare } from "@fortawesome/fontawesome-free-brands"
import {faWhatsapp } from "@fortawesome/fontawesome-free-brands"
import {faYoutube } from "@fortawesome/fontawesome-free-brands"

// import '../App.css';
// import {
//   Link, 
//   BrowserRouter as Router 
// } from "react-router-dom";

export const Home = () => {

  const [currentCategory, setCurrentcategory] = useState('maquillaje');
 
  return (
    
    <div>
      <section >

    <header className="header">
   <div className="icon-container">
    <FontAwesomeIcon className= "icons-redes"icon={faFacebookSquare}/>{" "}
    <FontAwesomeIcon className= "icons-redes"icon={faInstagram}/>{" "}
    <FontAwesomeIcon className= "icons-redes"icon={faWhatsapp}/>{" "}
    <FontAwesomeIcon className= "icons-redes"icon={faYoutube}/>{" "}
    </div> 
     </header>    
        {/* <nav>
        <Router>
            <a href="/" className='home'><Link to="/">Home</Link></a>
            <a href="/nosotros" className='nosotros'><Link to="/nosotros">Nosotros</Link></a>
            <a href="/nuestrasMarcas" className='nuestrasMarcas'><Link to="/nuestrasMarcas">Nuestras Marcas</Link></a>
            <a href="/categorias" className='categorias'><Link to="/categorias">Categorias</Link></a>
            <a href="/promociones" className='promociones'><Link to="/promociones">Promociones</Link></a>
            <a href="/contacto" className='contacto'><Link to="/contacto">Contacto</Link></a>
        </Router>
        </nav> */}
        <div className='subheader'>
          <h1 className='filters'>
            <a href="#" onClick={()=> setCurrentcategory('maquillaje')}>Maquillaje</a>
            <a href="#" onClick={()=> setCurrentcategory('fragancias')}>Fragancias</a>
            <a href="#" onClick={()=> setCurrentcategory('accesorios cosméticos')}>Accesorios cosméticos</a>
            <a href="#" onClick={()=> setCurrentcategory('cuidado personal')}>Cuidado personal</a>
            <a href="#" onClick={()=> setCurrentcategory('tratamiento corporal')}>Tratamiento corporal</a>
            <a href="#" onClick={()=> setCurrentcategory('tratamiento facial')}>Tratamiento facial</a>
          </h1>
        </div>
        <div>
          <Category categoryType={currentCategory}/>
        </div>
      </section>
    </div>
  );
}