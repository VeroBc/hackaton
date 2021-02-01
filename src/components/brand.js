import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../services/appContext'
import { Item } from './item.js';

import { subscribeBrand } from '../services/backend';
import '../App.css';

export const Brand = (props) => {

  const context = useContext(AppContext);

  const [categoryBrand, setCategoryBrand] = useState([]);

  useEffect(() => subscribeBrand(setCategoryBrand, props.brandType), [props.brandType]) 

  // para determinar si el item ha sido seleccionado
  const inCart = (item) => {
    for (let i = 0; i < context.orderList.length; i++)
      if (item.id === context.orderList[i].id )
        return true
  }

  return (
    <div className='Menu productsList' style={styles.container}>
      { categoryBrand.map((item, index) => <Item 
          key = {'m'+index} 
          item = {item} 
          seleccionar={context.addItemToOrder}
          borrar={() => context.deleteItemFromOrder(item)} 
          inCart = {inCart(item)}
          />)
      }
    </div>)
}

let styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderStyle: 'groove',
  },
}