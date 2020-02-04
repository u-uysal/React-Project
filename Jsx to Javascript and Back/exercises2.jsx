import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date() // currently day
  const hours = date.getHours() // currently hours
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <h1>Good {timeOfDay}!</h1> // if you want to use js code in jsx, you need
                               //to write in curly braces {}
  )
}

ReactDOM.render(<App />, document.getElementById("root"))