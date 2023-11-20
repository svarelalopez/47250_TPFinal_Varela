
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { CarritoProvider } from './Context/CarritoContext'
import "./App.css"
import NavBar from './Components/NavBar/NavBar'
import Cart from './Components/Cart/Cart'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Checkout from './Components/Checkout/Checkout'


function App() {

  return (
    <>
    <BrowserRouter>
       <CarritoProvider>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='*' element={<h2>Sitio en construcción</h2>}/>  {/* para cuando no existe la pagina */}
                <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
                <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
                <Route path='/item/:idItemcat' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        </CarritoProvider>
    </BrowserRouter>
    </>
  )
}

export default App

