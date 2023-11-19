import {useContext} from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    const{ carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if (cantidadTotal=== 0)  {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">Ver Productos</Link>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key={`ID_string_${producto.id}`} {...producto}/>) // recorrer el carrito y transformar el array de datos en elementos
        }
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar compra</Link>
    </div>
  )
}

export default Cart