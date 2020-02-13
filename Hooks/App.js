import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor" // we imported that.

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("") // initial value is empty string.
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    useEffect(() => {
        setColor(randomcolor())// whenever count changed,color will change 
    }, [count])
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App