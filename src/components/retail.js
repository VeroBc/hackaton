import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React from 'react';
// import { render } from '@testing-library/react';
export const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Proceso de compra
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <h1>Compra exitosa</h1>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}





