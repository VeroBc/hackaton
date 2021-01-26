import React, { useState } from 'react';
import { Category } from './category';
import { BrowserRouter as Link } from "react-router-dom";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {

  const [currentCategory, setCurrentcategory] = useState('maquillaje');
 
  return (
    <div>
      <section >
        <nav className='navbar'>
          {/* <img src={logo} className='imglogo' alt="Logo"/> */}
          <a href="/about" className='signup'><Link to="/about">Nosotros</Link></a>
          <a href="/signup" className='signup'><Link to="/signup">Regístrate</Link></a>
          <a href="/signin" className='signin'><Link to="/signin">Inicia sesión</Link></a>          
        </nav>

        <div className='subheader'>
          <h1 className='filters'>
            <a href="#" onClick={()=> setCurrentcategory('maquillaje')}>Maquillaje</a>
            <a href="#" onClick={()=> setCurrentcategory('fragancias')}>Fragancias</a>
            <a href="#" onClick={()=> setCurrentcategory('accesorios cosméticos')}>Accesorios cosméticos</a>
            <a href="#" onClick={()=> setCurrentcategory('cuidado personal')}>Cuidado personal</a>
            <a href="#" onClick={()=> setCurrentcategory('tratamiento corporal')}>Tratamiento corporal</a>
            <a href="#" onClick={()=> setCurrentcategory('tratamiento facial')}>Tratamiento facial</a>
            <FontAwesomeIcon className ='icon' icon={faShoppingCart} />
          
          </h1>
        </div>
        <div>
          <Category categoryType={currentCategory}/>
        </div>
      </section>
    </div>
  );
}