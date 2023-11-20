import { useState, useEffect } from "react"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../Services/config"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); //arranca con un array vacio

  const {idCategoria} = useParams();

  useEffect(()=>{
      const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)): collection(db, "inventario");

     getDocs(misProductos)
       .then(res=> {
          const nuevosProductos = res.docs.map (doc => {
            const data = doc.data()
            
            return {id:doc.id, ...data}
          })
          setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
  }, [idCategoria])

  return (
    <>
      <h2>Productos disponibles</h2>
      <ItemList productos = {productos}/>
    </>
  )
}

export default ItemListContainer