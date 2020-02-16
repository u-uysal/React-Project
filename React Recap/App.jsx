import React, { Component } from 'react'

export default class App extends Component {
    state = {
        tags = ["a1","b2","c3"]
    };
    renderTags () {
        if(this.state.tags.length === 0 ) return "There is no tags."
        return  <ul>{this.state.tags.map((tag)=><li key = {tag}>{tag}</li>)}</ul>
    }
    eventHandlig(){
        console.log("Event Handling")
    }
    render() {
        return (
            <div>
                {this.state.renderTags()}
                <button onClick= {this.eventHandlig}></button>
                                {/* Note that there is no parantheses cause we dont need to call function */}
            </div>
        )
    }
}
