import { useState, useEffect } from "react"
import { getProducts, getProdsbyCategory } from "../../asyncmock"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); //arranca con un array vacio

  const {idCategoria} = useParams();
  
  useEffect( ()=>{

    const funcionProductos = idCategoria ? getProdsbyCategory : getProducts;

    funcionProductos(idCategoria)
      .then(res=> setProductos(res))
      .catch(error => console.log(error))
  } ,[idCategoria])//cuando el array de dependencia está vacio, se ejecuta una sola vez , pero si pongo un estado, buelve a ejecutar la funcion cada vez que el estado cambia. por eso va idCategoria


  return (
    <>
      <h2>Productos disponibles</h2>
      <ItemList productos = {productos}/>
    </>
  )
}

export default ItemListContainer