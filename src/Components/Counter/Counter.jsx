import {useState} from 'react' 

const Counter = ({inicial, stock, funcionAgregar}) => {
    const [counter, setCounter]= useState(inicial);

    const sumCounter  =()=>   {if(counter < stock)    {setCounter(  counter + 1  );}}
    const restCounter =()=>   {if(counter > inicial)  {setCounter(  counter - 1  );}}

  return (
    <>
        <div>
          <button onClick={restCounter}> - </button> 
          <strong> {counter} </strong> 
          <button onClick={sumCounter}> + </button>
        </div>

        <button onClick={()=>funcionAgregar(counter)}>Agregar al carrito</button>
    </>
  )
}

export default Counter

