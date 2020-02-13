import React, {useState} from "react"

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function App() {
    const [count] = useState(0) // we assign 0 as a initial value
    
    return (
        <div>
            <h1>{count}</h1>
            <button>Change!</button>
        </div>
    )
}



export default App