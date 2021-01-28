import '../App.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import {MyVerticallyCenteredModal} from './retail';

// import {
//     Link
//   } from "react-router-dom";
export const Confirmation = () => {
    
        const [modalShow, setModalShow] = React.useState(false);
        return (
            <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Comprar
            </Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> 
            {/* <a href="https://wa.link/5hcta7" rel="marca" target="_blank"><Button type="button">
                    Consultora online
                </Button></a>
            <a href="https://belcorp.esika.com/pe/nuestras-tiendas/" rel="marca" target="_blank"><Button type="button">
                    Recojo en tienda
                </Button></a>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Centro para consultoras
            </Button> */}
            </>
        );
        
}