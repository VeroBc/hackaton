import '../App.css';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// import Button from 'react-bootstrap/Button';

const fadeImages = [
    'https://i.ibb.co/3v4GnWV/banner1.png',
    'https://i.ibb.co/YTb66Qs/banner2.png',
    'https://i.ibb.co/2ckGwT1/banner3.png'
  ];
export const Home = () => {

    return ( 
        // <div>
        // <h2>Home</h2>
        //     <img  alt="marca" className="mySlides" src="imagenes/banner1.png"/>
        //     <img  alt="marca" className="mySlides" src="imagenes/banner1.png"/>
        //     {/* <img class="mySlides" src="imagenes/Banner.png"/> */}
        //     <button className="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
        //     <button className="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>
        // </div>
        <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} alt="marca"className="banner1  "/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} alt="marca" className="banner2"/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} alt="marca" className="banner3"/>
            </div>
          </div>
        </Fade>
        {/* <div  className= "container-bold">
            <p>hola</p>
        </div> */}
        <img src="https://i.ibb.co/bJ7DCMj/barra.png" alt="marca" className="container-bold"/>
        <div  className= "container-texto">
        <h1 className= "container-texto-proximos"> Próximos lanzamientos </h1>
        </div>
        <div className= "container-productos">
            <img src="https://i.ibb.co/wrpB3PV/producto1.png" alt="marca" className="producto-home"/>
            <img src="https://i.ibb.co/bKxxR64/producto2.png" alt="marca" className="producto-home"/>
            <img src="https://i.ibb.co/0BPYb0P/producto3.png" alt="marca" className="producto-home"/>           
        </div>
        <div className="grid-container">
            <div className="foto1 img-hover-zoom--quick-zoom">
            <img src="https://i.ibb.co/kQpdvKt/producto4.png" alt="marca" className="container-bold"/>
            </div>
            <div className="foto2 img-hover-zoom--zoom-n-pan-v">
            <img src="https://i.ibb.co/mTrrYHt/producto6.png" alt="marca" className="container-bold"/>
            </div>
            <div className="foto3 img-hover-zoom--zoom-n-rotate ">
            <img src="https://i.ibb.co/2yjc4z9/producto5.png" alt="marca" className="container-bold-foto3"/>
            </div>
        </div>
      </div>
    )
}
