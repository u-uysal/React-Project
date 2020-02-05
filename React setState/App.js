import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    handleClick() {   {/* It wont work  because if you want to change state , you need to use setState() */}
        this.state.count++
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button> {/* Adding onClick Events */}
                
            </div>
        )
    }
}

export default App
