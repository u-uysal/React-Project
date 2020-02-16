import React, { Component } from 'react'

export default class App extends Component {
    state = {
        tags = ["a1","b2","c3"]
    };
    render() {
        return (
            <div>
                <ul>{this.state.tags.map((tag)=><li key = {tag}>{tag}</li>)}</ul>
            </div>
        )
    }
}
