import React, { useState } from "react"

function App() {
    const value = useState(true)
    console.log(value) // Output : [true, ƒ()]
    
    return (
        <div>
            <h1>Is state important to know? Yes</h1>
        </div>
    )
}


export default App