import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    componentDidMount() {
        fetch("https://swapi.co/api/") // fetching data from swapi.
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