import React from "react"

function Conditional(props) {
    if(props.isLoading === true) {
        return (
            <h1>Loading...</h1> // Ekranda ilk loading yazacak çünkü ilk render işlenecek.
        )
    } else {
        return (
            <h1>Some cool stuff about conditional rendering</h1> // render işlendikten 1.5 sn sonra componentDidMount 
                                                                // işleneceği için 
        )
    }
    
}

export default Conditional