import { useState, useEffect } from "react"
import { getOneProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null);//inicializa en null porque es un objeto
  const {idItem} = useParams();
  
  useEffect(()=>{
    getOneProduct(idItem)
    .then(respuesta=> setProducto(respuesta)) //recibe una respuesta y lo setea en setproducto(respuesta)
  },[idItem])

  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer