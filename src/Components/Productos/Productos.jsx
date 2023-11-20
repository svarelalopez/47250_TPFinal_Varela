import {useState, useEffect} from 'react'
import { getDocs, collection, query } from 'firebase/firestore'
import { db } from '../../Services/config'

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const misProductos = query(collection(db, "inventario"))

        getDocs(misProductos)
        .then(respuesta=> {
            setProductos(respuesta.docs.map((doc)=>({id:doc.id, ...doc.data()})));
        })

    }, [productos])

  return (
    <>
    <h2>Mis productos desde firebase</h2>

    <div className='productos-container'>
        {
            productos.map( producto => (
                <div className='productos-card'>
                    <h3>{producto.nombre}</h3>
                    <p>Precio: {producto.precio}</p>
                    <p>Stock: {producto.stock}</p>
                    <button>Comprar</button>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Productos