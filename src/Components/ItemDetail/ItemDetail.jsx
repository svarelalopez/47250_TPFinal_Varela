import { useState, useContext } from 'react'
import './ItemDetail.css'
import { CarritoContext } from '../../Context/CarritoContext'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'


export const ItemDetail = ({id, nombre, stock, precio, img}) => { //recibo por props 

  const [agregarCantidad, setAgregarCantidad] = useState(0); 
  const{agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad)=>{
    setAgregarCantidad(cantidad);

    //acá objeto con item y cantidad
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad)
  }

  return (
    <div className='itemContainer'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3># {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maxime impedit vero accusamus beatae animi, dolore iusto quo a blanditiis distinctio mollitia ducimus corporis optio exercitationem soluta ut? Unde, nam?</p>

        {//montaje del contador
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Counter inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
    
  )
}

export default ItemDetail