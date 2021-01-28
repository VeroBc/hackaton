import React from 'react';
import { Item } from './item';
import '../App.css';
import { useHistory } from "react-router-dom";


export const OrderCart = (props) => {
  const items =  props.orderList;
  const history = useHistory();

  const payment = () => {
    history.push("/payment");

  }
  
  return (
    <div className='orderCart'>
      <div className='listCart'>
        {items.map((item, index) => <Item key={'ik'+ index} item={item} inCart={true} borrar={()=> props.deleteItemFromOrder(item)}/>)}

      </div>

      <div className='totalPrice'>
          <div className='total'>Total pedido</div>
          <div className='amount'>S/. {(props.orderList.reduce((acc, item) => acc + (parseInt(item.price - (item.price * (item.discount/100)))), 0)).toFixed(2)}</div>
          <button className ='buttonOrder' onClick={payment} >Comprar ahora</button>
      </div>
    </div>
  )
}

