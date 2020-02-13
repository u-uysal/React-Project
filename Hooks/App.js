import React, { useState } from "react"

function App() {
    const [ value ] = useState("No") // array destructuring
    console.log(value)
    
    
    return (
        <div>
        <h1>Is state important to know? {value}</h1>      {/* We dont need to write index number anymore.Because 
                                                               we use array destructuring*/}
        </div>
    )
}


export default App