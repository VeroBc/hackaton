/* eslint-disable jsx-a11y/anchor-is-valid */
import { Category } from './category';
import React, { useState } from 'react';
import "./selectCategory.css";

export const SelectCategory = (props) => {

  const [currentCategory, setCurrentcategory] = useState('maquillaje');

  const filterCategory = (e, newCategory) => {
    e.preventDefault();
    setCurrentcategory(newCategory);
  }

  return (
    <div>
        <section>
          <div className='subheader'>
            <div className='filters'>
              <a href="#"  className='filtersA' onClick={(e)=> filterCategory(e,'maquillaje')}>Maquillaje</a>
              <a href="#"  className='filtersA' onClick={(e)=> filterCategory(e,'fragancias')}>Fragancias</a>
              <a href="#"  className='filtersA' onClick={(e)=> filterCategory(e,'accesorios cosméticos')}>Accesorios cosméticos</a>
              <a href="#"  className='filtersA' onClick={(e)=> filterCategory(e,'cuidado personal')}>Cuidado personal</a>
              <a href="#"  className='filtersA' onClick={(e)=> filterCategory(e,'tratamiento corporal')}>Tratamiento corporal</a>
              <a href="#"  className='filtersA' onClick={(e)=> filterCategory(e,'tratamiento facial')}>Tratamiento facial</a>
            </div>
          </div>

          <div>
            <Category categoryType={currentCategory} addItemToOrder={props.addItemToOrder} deleteItemFromOrder={props.deleteItemFromOrder} user={props.user} orderList={props.orderList}/>
          </div>

        </section>
   
    </div>
  );

}