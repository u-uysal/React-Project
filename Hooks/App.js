import React, { useState } from "react"

function App() {
    const value = useState()
    console.log(value) // OUTPUT : [null, ƒ()]
    
    return (
        <div>
            <h1>Is state important to know? Yes</h1>
        </div>
    )
}


export default App