import React, { useState } from "react"

function App() {
    const value = useState("Yes")
    console.log(value)
    
    return (
        <div>
          <h1>Is state important to know? {value[0]}</h1>   {/* value[0] = Yes */}
        </div>
    )
}


export default App