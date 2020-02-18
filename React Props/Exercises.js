import React from "react"

const Exercises = (props) =>{
    return (
        <div>
            <h1>Hello {props.name}</h1>
         {props.children}     {/* P tag and button tag!*/}
        </div>
    )

}
export default Exercises;