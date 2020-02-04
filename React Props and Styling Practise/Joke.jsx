import React from "react"

function Joke(props) {
    return (
        <div>
            {<h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            /* it is important to use ternany operator */}
            <h3>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke