import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
    // class-based component
    // constructor method
2. Have state keep track of whether the user is logged in or not
    // isLoggedIn: Boolean (true or false)
3. Add a button that logs the user in/out
    // event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
        // Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
    // Conditional Rendering
*/

class App extends React.Component { //  We changed functional component to class-based component for using state.
    constructor() {
        super()
        this.state = { 
            isLoggedIn: false
        }
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