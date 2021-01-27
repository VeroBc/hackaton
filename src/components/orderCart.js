import React from 'react';
import { Item } from './item';
import '../App.css';

export const OrderCart = (props) => {

  let items =  props.orderList;

  
  return (
    <div className='orderKitchen'>
      <div className='listKitchen'>
        {items.map((item, index) => <Item key={'ik'+ index} item={item} inCart={true} borrar={()=> props.deleteItemFromOrder(item)}/>)}

      </div>

      <div className='totalPrice'>
          <div className='total'>Total pedido</div>
          <div className='amount'>S/. {(props.orderList.reduce((acc, item) => acc + (parseInt(item.price - (item.price * (item.discount/100)))), 0)).toFixed(2)}</div>
          <button className ='buttonOrder'>Comprar ahora</button>
      </div>
    </div>
  )
}

