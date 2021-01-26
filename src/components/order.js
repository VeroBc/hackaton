import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const Order = (props) => {
  return(
    <div className='orderedList' onClick={ ()=> props.borrar && props.borrar(props.data)}>
      <div className='orderProduct'>{props.data.name}</div>
      <div className='priceProduct'>S/. {(props.data.price).toFixed(2)}</div>
      <FontAwesomeIcon className ='icon' icon={faTrashAlt} />
    </div>
  )
}
