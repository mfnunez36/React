import React from 'react'
import { useState } from 'react'

export const Contador = () => {
    const [clicks, setClicks] = useState(0)

    const increment = () => { setClicks( clicks + 1 ) }
    const decrement = () => { setClicks( clicks - 1 ) }
    
    return (
        <div>
            <h3>{clicks}</h3>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
