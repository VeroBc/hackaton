import React, { useState } from 'react';
import '../App.css';
import { Brand } from './brand'
export const NuestrasMarcas = (props) => {

  const [currentBrand, setCurrentBrand] = useState('ESIKA');


  return (
    <div>
      <button onClick={()=> setCurrentBrand('ESIKA')}>ESIKA</button>
      <button onClick={()=> setCurrentBrand('L\'BEL')}>L'EBEL</button>
      <button onClick={()=> setCurrentBrand('CYZONE')}>CYZONE</button>
      <div>
        <Brand brandType={currentBrand} addItemToOrder={props.addItemToOrder} deleteItemFromOrder={props.deleteItemFromOrder} user={props.user} orderList={props.orderList}/>
      </div>
    </div>
  )
}
