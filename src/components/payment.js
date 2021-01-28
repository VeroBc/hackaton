import React from 'react';
import '../App.css';

export const Payment = (props) => {

  return (
    <div className='orderKitchen'>


    <div>
          <div className="container-formulary">
            <div className="first-form"> 
            <h4 className="mb-3">Direccion de Envío</h4>
            <form className="form-container">
                  <label for="nombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    required
                  ></input>
                  <label for="apellido">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    name="apellido"
                    required
                  ></input>
                  <label for="correo">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="nombre@correo.com"
                    name="correo"
                    required
                  ></input>
                  <label for="direccion">Direccion</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="direccion"
                    required
                  ></input>
                <label for="pais">Pais</label>
                <select name="pais" id="pais" className="custom-select d-block w-100">
                  <option value="">Seleccionar Departamento</option>
                  <option value="mexico">Lima</option>
                  <option value="españa">Arequipa</option>
                  <option value="colombia">Cusco</option>
                </select>
                <label for="estado">Distrito</label>
                <input type="text" id="distrito" className="form-control" required></input> 
                <label for="codigo-postal">Codigo Postal</label>
                <input type="text" id="codigo-postal" className="form-control" required></input>
                <label for="numero-tarjeta">Numero de tarjeta</label>
                <input type="text" id="numero-tarjeta" className="form-control" required></input>
                <label for="nombre-tarjeta">Nombre en la tarjeta</label>
                <input type="text" id="nombre-tarjeta" className="form-control" required></input>
                <small className="text-muted">
                  Nombre completo como se muestra en la tarjeta
                </small>
                  <label for="tarjeta-expiracion">Expiración</label>
                  <input
                    type="text"
                    id="tarjeta-expiracion"
                    className="form-control"
                    required
                  ></input>
                  <label for="tarjeta-ccv">CVV</label>
                  <input type="text" id="tarjeta-ccv" className="form-control" required></input>
              <input
                type="submit"
                value="Continuar al pago"
                className="btn-submit"
              ></input>
            </form>
            </div>
            <div>
              <h4 className="mb-3 d-flex justify-content-between align-items-center">
                <span className="text-muted">Tu Carrito</span>
              </h4>
              <ul className="list-group mb-3">
              {
                props.orderList.map((item, index) => {
                  return(
                    <li 
                      className="list-group-item d-flex justify-content-between"
                      key={'ik'+ index}>
                        <h6 className="my-0">{item.name}</h6>
                        <small className="text-muted">{item.description}</small>
                        <span className="text-muted">{item.price}</span>
                      </li>
                  )
                })
              }
                {/* <li className="list-group-item d-flex justify-content-between">
                    <h6 className="my-0">item1</h6>
                    <small className="text-muted">descripción</small>
                  <span className="text-muted">10€</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <h6 className="my-0">item2</h6>
                    <small className="text-muted">descripción</small>
                  <span className="text-muted">20€</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <h6 className="my-0">item3</h6>
                    <small className="text-muted">descripcion</small>
                  <span className="text-muted">3€</span>
                </li> 
                <li className="list-group-item d-flex justify-content-between bg-light">
                    <h6 className="my-0">Codigo de descuento</h6>
                    <small className="text-success">DPS5</small>
                  <span className="text-success">-5€</span>
                </li> */}
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <span>Total (SOLES)</span>
                  <strong><div className='amount'>S/. {(props.orderList.reduce((acc, item) => acc + (parseInt(item.price - (item.price * (item.discount/100)))), 0)).toFixed(2)}</div></strong>
                </li>
              </ul>
              <form action="" className="card p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cupon"
                  ></input>
                    <button className="btn btn-secondary">Canjear</button>
                </form>
              </div>
          </div> 
      </div>

      {/* <div className='listKitchen'>
        {items.map((item, index) => <Item key={'ik'+ index} item={item} inCart={true} borrar={()=> props.deleteItemFromOrder(item)}/>)}
      </div> */}

    </div>
  )
}