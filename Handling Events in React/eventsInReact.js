import React from "react"

function handleClick() {
    console.log("I was clicked")
}



function App() {
    return (
        <div>
            <img src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
            {/* Notice 1 : All events need to write with Camelcase like onClick, onMouseOver
                            
                Notice2: We need to write function in curly braces => {}
            
             */}
        </div>
    )
}

export default App
