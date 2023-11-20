import { useState, useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'


export const ItemDetail = ({id, nombre, stock, precio, img, descripción}) => { //recibo por props 

  const [agregarCantidad, setAgregarCantidad] = useState(0); 
  const{agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad)=>{
    setAgregarCantidad(cantidad);

    //acá objeto con item y cantidad
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad)
  }

  return (
    <div className='itemDetail'>
        <h2>{nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>Código de producto: # {id}</h3>
        <img src={img} alt={nombre} />
        <p>{descripción}</p>

        {//montaje del contador
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Counter inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
    
  )
}

export default ItemDetail