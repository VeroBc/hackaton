import React from 'react';
import '../App.css';

export const Item = (props) => {

  const inCategory = !!props.seleccionar;

  const priceSale = parseInt(props.item.price - (props.item.price * (props.item.discount/100)));
  console.log(props.inCart);
  
  return (
    <ul 
      style={styles.container}
      className='unorderList'
      >
      <div  className='name' style={styles.name}>{props.item.name}</div>
      <div  className='description' style={styles.description}>{props.item.description}</div>
      <div  className='brand' style={styles.description}>{props.item.brand}</div>
      {inCategory && <div  className='price' style={styles.price}>S/. {props.item.price}</div>}
      {inCategory && <div  className='discount' style={styles.price}>Oferta S/. {priceSale}</div>}
      {!inCategory && <div  className='discount' style={styles.price}>Precio S/. {priceSale}</div>}
      <img src={props.item.imgUrl} className='photoProduct' alt="Camera"></img>
      {inCategory && !props.inCart && <button className ='cart' onClick={ ()=> (props.seleccionar(props.item))} >
          Añadir al carrito
      </button>}
      {props.inCart && <button className ='cart' onClick={props.borrar} >Quitar del carrito</button>}
      {inCategory && <button className ='buynow'>Comprar ahora</button>}
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
