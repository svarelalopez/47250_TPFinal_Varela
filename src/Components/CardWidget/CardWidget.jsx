import React from 'react'
import './CardWidget.css'

const CardWidget = () => {
    const imgCart = "https://www.freeiconspng.com/uploads/pink-shopping-cart-icon-17.gif";
  return (
    <>
           <img className='CW' src={imgCart} alt=""/>
           <strong>12</strong>
    </>
  )
}
export default CardWidget