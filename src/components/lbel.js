import '../App.css';
import { Category } from './category';
import React, { useState } from 'react';

export const Lbel = () => {
    const [currentCategory, setCurrentcategory] = useState('maquillaje');
    return (
        <div>
            <div>
            <img src="/imagenes/lbelmarca.png" alt="marca" className="bannermarca"/>
            </div>
        <section href="#nav-second">
        <div className='subheader'>
            <h1 className='filters'>
            <a href="#nav-second" onClick={()=> setCurrentcategory('maquillaje')} className='filtersA'>Maquillaje</a>
            <a href="#nav-second" onClick={()=> setCurrentcategory('fragancias')} className='filtersA'>Fragancias</a>
            <a href="#nav-second" onClick={()=> setCurrentcategory('accesorios cosméticos')} className='filtersA'>Accesorios cosméticos</a>
            <a href="#nav-second" onClick={()=> setCurrentcategory('cuidado personal')} className='filtersA'>Cuidado personal</a>
            <a href="#nav-second" onClick={()=> setCurrentcategory('tratamiento corporal')} className='filtersA'>Tratamiento corporal</a>
            <a href="#nav-second" onClick={()=> setCurrentcategory('tratamiento facial')} className='filtersA'>Tratamiento facial</a>
            </h1>
        </div>
        <div>
            <Category categoryType={currentCategory}/>
        </div>
        </section> 
        </div>
 
    )
}