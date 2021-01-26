import React, { useState } from 'react';
import { Category } from './category';
import '../App.css';

export const Home = () => {

  const [currentCategory, setCurrentcategory] = useState('maquillaje');
 
  return (
    <div>
      <section >
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