import React, { useState, useEffect } from 'react';
import { Item } from './item.js';
import { Order } from './order';
import { subscribeCategory} from '../services/backend';
import '../App.css';

export const Category = (props) => {

  const [category, setCategory] = useState([]);
  const [order, setOrder] = useState([]);

  const selectItem = (item) => {
    setOrder([...order, item]);

  }

  const deleteItem = (index) => {
    let tempArray = [...order];        
    tempArray.splice(index,1);
    setOrder(tempArray);
  }
  
  useEffect(() => subscribeCategory(setCategory, props.categoryType), [props.categoryType]) 
  
  return (
    <div className ='Menu' style={styles.container}>
      
      <div className='productsList' style={styles.block}>
        {category.map((item, index) => <Item key = {'m'+index} data = {item} seleccionar={selectItem} />)}
      </div>

      <div className='orderList' style={styles.block}>
        {/* <div><label className='atention'>Atiende:</label>{username && <p className='atentionName'>{username.name}</p>}</div>
        <div><label className='atention'>Mesa:</label>{username && <p className='atentionName'>{username.tables[0]}</p>}</div> */}
 
        {order.map((item, index) => 
          <Order key = {'o'+index} data = {item} borrar={()=> deleteItem(index)}/>)}

        <div className='totalPrice'>
          <div className='total'>Total</div>
          <div className='amount'>S/. {(order.reduce((ant, item) => ant + item.price, 0)).toFixed(2)}</div>
          <button className ='buttonOrder'>Comprar</button>
        </div>
      </div>



     
    </div>
  )
}


let styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  block: {
    // display: 'inline-block',
    // border: 1,
    borderStyle: 'groove',
    // paddingTop: 10,
    // margin: 10
  },
}
