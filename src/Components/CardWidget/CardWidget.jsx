import React, { useContext } from 'react'
import './CardWidget.css'
import { CarritoContext } from '../../Context/CarritoContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext);
  const imgCart = "https://www.freeiconspng.com/uploads/pink-shopping-cart-icon-17.gif";

  return (
    <div>
      <Link to="/cart">
           <img className='CW' src={imgCart} alt=""/>
           {
            cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
           }
      </Link>
    </div>
  )
}
export default CardWidget