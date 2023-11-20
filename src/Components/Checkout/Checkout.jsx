import {useState, useContext} from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { db } from '../../Services/config'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");


    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext);

    //Funciones & validaciones

    const manejadorFormulario = (event) =>{
        event.preventDefault();

        //verificacion campos completos:
        if(!nombre || ! apellido || !telefono || !email || !emailConfirmacion){
            setError("Debes completar todos los campos antes de enviar el formulario")
            return; //en estos "return" termina la ejecucion de la orden
        }
        //verificar emails iguales:
        if(email !== emailConfirmacion){ setError("Los campos de email no coinciden"); return;}

        //Objeto con los datos de la orden de compra:
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };


        // Codigo con varias promesas en paralelo - Actualizar stock y generar orden de compra
        Promise.all(
            orden.items.map( async (productoOrden) =>{
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;//accedo acá a la info del documento

                await updateDoc( productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
            //Guardar orden en base de datos:
            addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("error en crear la orden", error);
                setError("Error al crear la orden");
            });
        })
        .catch(error => {
            console.log("Error, No se pudo actualizar el stock", error);
            setError("No se pudo actualizar el stock");
        });

    }

  return (
    <div>
        <h2>Check out</h2>

        <form onSubmit={manejadorFormulario}>
            {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>{producto.item.nombre} x {producto.cantidad}</p>
                        <p>{producto.item.precio}</p>
                        <hr />
                    </div>
                ))
            }

            <div>   <label htmlFor="">Nombre</label>            <input type="text"  onChange={(e)=> setNombre(e.target.value)} />   </div>
            <div>   <label htmlFor="">Apellido</label>          <input type="text"  onChange={(e)=> setApellido(e.target.value)} />   </div>
            <div>   <label htmlFor="">Telefono</label>          <input type="text"  onChange={(e)=> setTelefono(e.target.value)} />   </div>
            <div>   <label htmlFor="">Email</label>             <input type="email" onChange={(e)=> setEmail(e.target.value)} />   </div>
            <div>   <label htmlFor="">Confirmar Email</label>   <input type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)} />   </div>
            

            {   error && <p style={{color:"red"}}> {error} </p> }

            <button type='submit'>Confirmar Compra</button>
            <br />
            {   ordenId && (<strong>Gracias por tu compra! Número de orden: {ordenId}</strong>)  }



        </form>
    </div>
  )
}

export default Checkout