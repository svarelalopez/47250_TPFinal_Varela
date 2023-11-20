import React, { Children } from 'react'
// importar de react usestate y use context, para crear un contexto que amacene toda la logica del cart.
import { useState,createContext } from 'react'

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});


 export const CarritoProvider = ({children}) => {
    // crear estado para carrito, tot, y cantTot
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);


    // console.log(carrito);     //verificación

    //acá funciones auxiliares para la logica del carrito

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if(!productoExistente) {
            setCarrito(prev => [...prev, {item, cantidad}]);//nuevo array a partir del anterior. (... = operador de propagacion)
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (cantidad * item.precio));
        }else{
            const carritoActualizado = carrito.map(prod =>{
                if(prod.item.id === item.id){
                    return {...prod, cantidad: prod.cantidad + cantidad};
                    } else {return prod }
            })
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (cantidad * item.precio));
        }
    }

    //eliminar producto

    const eliminarProducto =(id)=>{
        const productoEliminado = carrito.find(prod => prod.item.id === id );
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        
        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio*productoEliminado.cantidad));
    }

    //vaciar carrito

    const vaciarCarrito =()=>{
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }


  return ( //mandar el provider
    <CarritoContext.Provider value = {{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}> {/* value = funciones, items, valores*/}
        {children}
    </CarritoContext.Provider>
 //Children para representar comps que puedan precisar carrito y sus funciones 
  )
}

export default CarritoProvider