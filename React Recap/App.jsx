import React, { Component } from 'react'

export default class App extends Component {
    state = {
        tags = ["a1","b2","c3"]
    };
    renderTags () {
        if(this.state.tags.length === 0 ) return "There is no tags."
        return  <ul>{this.state.tags.map((tag)=><li key = {tag}>{tag}</li>)}</ul>
    }
    render() {
        return (
            <div>
                {this.state.renderTags()}                
            </div>
        )
    }
}
