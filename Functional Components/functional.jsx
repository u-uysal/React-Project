import React from "react"
import ReactDOM from "react-dom"
ReactDOM.render(
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>,
    document.getElementById("root")
  )

  // birden fazla elementimizin olduğu düşünüldüğünde render içinde yazmak cok saçma olur. Bu yüzden functional
  //componentlardan yararlanacağız.

  import React from "react"
import ReactDOM from "react-dom"

function MyApp() { // CamelCase baş harfleri de büyük component isimlerinin
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

ReactDOM.render(
  <MyApp />, // self closing tagları unutma
  document.getElementById("root")
)