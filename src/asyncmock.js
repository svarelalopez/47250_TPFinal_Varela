//primero un inventario de prroductos

const misProductos = [
    {id:"1", nombre: "Clasica", precio: 129, img: "../img/Canarias_Clasica.jpeg", idCat:"2"},
    {id:"2", nombre: "Rosa Mosqueta", precio: 149, img: "../img/Canarias_te.jpg", idCat:"2"},
    {id:"3", nombre: "Serena", precio: 139, img: "../img/Canarias_Serena.jpeg", idCat:"3"},
    {id:"4", nombre: "Especial", precio: 159, img: "../img/Canarias_Especial.jpg", idCat:"3"}
]

export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos);
        }, 500)
    })
}

// Detalles del producto

export const getOneProduct = (id)=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id); //Me retorna aquel elemento cuyo id es igual al quee stoy recibiendo por parametro
            resolve(producto);
        }, 500)
    })
}

//funcion que retorna la catgoría
export const getProdsbyCategory =(idCategoria)=>{
    return new Promise (resolve=>{
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item=>item.idCat === idCategoria);
            resolve(productosCategoria);
            
        }, 500);
    })
}
