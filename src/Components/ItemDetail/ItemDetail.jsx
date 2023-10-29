import React from 'react'
import './ItemDetail.css'


export const ItemDetail = ({id, nombre, precio, img}) => { //recibo por props 
  return (
    <div className='itemContainer'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3># {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maxime impedit vero accusamus beatae animi, dolore iusto quo a blanditiis distinctio mollitia ducimus corporis optio exercitationem soluta ut? Unde, nam?</p>
    </div>
    
  )
}

export default ItemDetail