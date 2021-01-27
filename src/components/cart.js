import React from 'react';
import { OrderCart } from './orderCart';
import '../App.css';

export const Cart = (props) => {
  return (
      <div className='kitchen'>
          <OrderCart orderList={props.orderList} />
      </div>
  )
}