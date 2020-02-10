import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    componentDidMount() { // Means that component just born. It runs only once
        
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            // do something important here
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }
    
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App