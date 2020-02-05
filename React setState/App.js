import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    handleClick() {
        this.setState({ count: 1 })  // Adding setState. But it wont work anyway. Because we need to bind 
                                     // our function with App component.
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
