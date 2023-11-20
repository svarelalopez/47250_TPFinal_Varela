import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../Services/config"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null);//inicializa en null porque es un objeto
  const {idItem} = useParams();

  useEffect(()=>{
    const nuevoDoc = doc(db, "inventario", idItem);

    getDoc(nuevoDoc)
    .then(res => {
      const data = res.data();
      const nuevoProducto = {id: res.id, ...data}
      setProducto(nuevoProducto);
    })
    .catch(error => console.log(error))
  },[idItem])

  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer