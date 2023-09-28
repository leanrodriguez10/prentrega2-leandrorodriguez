import React, { useState } from 'react'

const Counter = () => {
    const [count, setCounter] = useState(0)

    const increment = () => {
        
        setCounter(count + 1)

    }
        
    const decrement = () => {
        if(count > 1){
            setCounter(count - 1)  
        }
       

    }
        


  return (
    <div>
        <button onClick={increment}>AGREGAR</button>
        <span>{ count }</span>
        <button onClick={decrement}>QUITAR</button>

    </div>
  )
}

export default Counter