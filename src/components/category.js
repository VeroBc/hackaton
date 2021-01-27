import React, { useState, useEffect } from 'react';
import { Item } from './item.js';
// import { Order } from './order';
import { subscribeCategory } from '../services/backend';
import '../App.css';

export const Category = (props) => {

  const [category, setCategory] = useState([]);

  useEffect(() => subscribeCategory(setCategory, props.categoryType), [props.categoryType]) 

  // para determinar si el item ha sido seleccionado
  const inCart = (item) => {
    for (let i = 0; i < props.orderList.length; i++)
      if (item.id === props.orderList[i].id )
        return true
  }

  return (
    <div className='Menu productsList' style={styles.container}>
      { category.map((item, index) => <Item 
          key = {'m'+index} 
          item = {item} 
          seleccionar={props.addItemToOrder}
          borrar={() => props.deleteItemFromOrder(item)} 
          inCart = {inCart(item)}/>)
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
