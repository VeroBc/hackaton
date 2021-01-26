import React, { useState } from 'react';
import { Category } from './category';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram } from "@fortawesome/fontawesome-free-brands";
import {faFacebookSquare } from "@fortawesome/fontawesome-free-brands"
import {faWhatsapp } from "@fortawesome/fontawesome-free-brands"
import {faYoutube } from "@fortawesome/fontawesome-free-brands"
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