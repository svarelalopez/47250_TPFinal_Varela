import {useState, useEffect} from 'react' //import react ya no es necesario pero el fafce lo genera, no cambia


//Este .jsx tiene un contador que utiliza el HOOK useState

//El efecto primario de react es lrenderizar los componentes, manipulando el DOM. Pero renderizarse (mostrarse) no es la unica función de las apps.
//Entonces, para manipular los efectps secundarios de estado vamos a usar un nuevo HOOK que se llama use Effect

const Counter = (counter) => {
    const [counter, setCounter]= useState(1);//a usestate le paso el valor inicial

    //* useEffect es una funcion cuyo primer parametro es una función flecha, y el segundo un array de dependencias donde se indica qué estar mirando por si cambia 
    useEffect(()=>{document.title = `Counter: ${counter}`;}, [counter] )

    const sumCounter =()=>{ setCounter(counter+1);}
    const restCounter =()=>{ setCounter(counter-1);}


  return (
    <div>
      <button onClick={restCounter}> - </button> {/*si coloco parentesis en el onclick lo ejecuta automaticamente */}
      <strong> {counter} </strong> {/*aca indicador de dato seleccionado*/}
      <button onClick={sumCounter}> + </button>
    </div>
  )
}

export default Counter