import React, { useState } from 'react';
import '../App.css';
import { Brand } from './brand'
import Button from 'react-bootstrap/Button';
export const NuestrasMarcas = (props) => {

  const [currentBrand, setCurrentBrand] = useState('ESIKA');

  const sc = (brand) => {
    document.querySelector('#brandd').scrollIntoView({ behavior: 'smooth'});
    setCurrentBrand(brand);
  }


  return (
    <div>

      <div className= "container-bu" >
        <div style={{position: "relative"}}>
            <img src="https://i.ibb.co/jWvMDwB/esika.png" alt="marca" className="marcaesika"/>
            <Button className= "button1" variant="light" size="sm"><div  onClick={()=> sc('ESIKA')} className="link-marca" >Ver productos </div> </Button>    
        </div>
        <div style={{position: "relative"}}>
            <img src="https://i.ibb.co/D784SPS/lbel.png" alt="marca" className="marcaesika"/>
            <Button className= "button1" variant="light" size="sm"><div onClick={()=> sc('L\'BEL')} className="link-marca">Ver productos </div></Button>
        </div>
        <div style={{position: "relative"}}>
            <img src="https://i.ibb.co/NKwyCmX/cyzone.png" alt="marca" className="marcaesika"/>
            <Button className= "button1" variant="light" size="sm"><div onClick={()=> sc('CYZONE')} className="link-marca">Ver productos </div></Button>
        </div>
      </div>



      <div id="brandd"  style={{height: 50}} />
      <h3 style={{marginLeft: "1.5%"}}>  Marca: {currentBrand}</h3>
      <Brand brandType={currentBrand} user={props.user}/>
    </div>
  )
}
