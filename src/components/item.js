import React from 'react';
import '../App.css';

export const Item = (props) => {

  return (
    <ul 
      style={styles.container}
      className='unorderList'
      >
      <div  className='name' style={styles.name}>{props.data.name}</div>
      <div  className='description' style={styles.description}>{props.data.description}</div>
      <div  className='price' style={styles.price}>S/. {props.data.price}</div>
      <div  className='discount' style={styles.price}>Oferta S/. {props.data.discount}</div>
      <img src={props.data.imgUrl} className='photoProduct' alt="Camera"></img>
      <button className ='cart' onClick={ ()=>(props.seleccionar && props.seleccionar(props.data))} >Añadir al carrito</button>
      <button className ='buynow'>Comprar ahora</button>
    </ul>
  )
} 

let styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  description: {
    display: 'inline-block'
  },
  price: {
    display: 'inline-block',
    // marginLeft: 10
  }
}
