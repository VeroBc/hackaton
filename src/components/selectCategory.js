/* eslint-disable jsx-a11y/anchor-is-valid */
import { Category } from './category';
import React, { useState } from 'react';
import "./selectCategory.css";

export const SelectCategory = (props) => {

  const [currentCategory, setCurrentcategory] = useState('maquillaje');
 
  return (
    <div>
        <section>
          <div className='subheader'>
            <div className='filters'>
              <a href="#"  className='filtersA' onClick={()=> setCurrentcategory('maquillaje')}>Maquillaje</a>
              <a href="#"  className='filtersA' onClick={()=> setCurrentcategory('fragancias')}>Fragancias</a>
              <a href="#"  className='filtersA' onClick={()=> setCurrentcategory('accesorios cosméticos')}>Accesorios cosméticos</a>
              <a href="#"  className='filtersA' onClick={()=> setCurrentcategory('cuidado personal')}>Cuidado personal</a>
              <a href="#"  className='filtersA' onClick={()=> setCurrentcategory('tratamiento corporal')}>Tratamiento corporal</a>
              <a href="#"  className='filtersA' onClick={()=> setCurrentcategory('tratamiento facial')}>Tratamiento facial</a>
            </div>
          </div>

          <div>
            <Category categoryType={currentCategory} addItemToOrder={props.addItemToOrder} deleteItemFromOrder={props.deleteItemFromOrder} user={props.user} orderList={props.orderList}/>
          </div>

        </section>
   
    </div>
  );

}