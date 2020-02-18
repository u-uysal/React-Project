import React, { Component } from 'react';
import Exercises from '../Exercises';

class Apps extends Component {
    render() {
        return (
            <div>
                <Exercises name ="Ufuk"><p>This a paragraph!</p></Exercises>
                <Exercises name ="UYSAL"><button>Button!</button></Exercises>
            </div>
        )
    }
}
