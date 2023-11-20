import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className="item">
        <img src={img} alt={nombre} />
        <h3>{nombre} </h3>
        <p>Precio: {precio}</p>
        <p>Codigo id - {id}</p>
        <p>En stock: {stock}</p>
        <Link to={`/item/${id}`}>Ver Detalles del Producto</Link>


    </div>
  )
}

export default Item