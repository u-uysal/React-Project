import React from "react"

class App extends React.Component {
    constructor() { // we can use constructor only when we use Class-Based Components
        super() 
        this.state = {  // state hold all the data that we need them. And it is changable.
            answer: "Yes"
        }
    }
    
    render() {
        return (
            <div>
                {<h1>Is state important to know? {this.state.answer}</h1> /* when we want to use state, use this.state */}
                <ChildComponent answer={this.state.answer}/>
            </div>
        )
    }
}

export default App