
import React, { useContext } from 'react';
import { Item } from './item';
import '../App.css';
import { useHistory } from "react-router-dom";
import { AppContext } from '../services/appContext';


export const OrderCart = (props) => {

  const context = useContext(AppContext);

  const items =  context.orderList;
  const history = useHistory();

  const payment = () => {
    history.push("/payment");

  }
  
  return (
    <div className='orderCart'>
      <div className='listCart'>
        {items.map((item, index) => <Item key={'ik'+ index} item={item} inCart={true} borrar={()=> context.deleteItemFromOrder(item)}/>)}

      </div>

      <div className='totalPrice'>
          <div className='total'>Total pedido</div>
          <div className='amount'>S/. {(context.orderList.reduce((acc, item) => acc + (parseInt(item.price - (item.price * (item.discount/100)))), 0)).toFixed(2)}</div>
          <button className ='buttonOrder' onClick={payment} >Comprar ahora</button>
      </div>
    </div>
  )
}

