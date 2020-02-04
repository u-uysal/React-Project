import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"



function App() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    // When you use the map function, it returns always new array with looping
    // İf you are using map function dont forget to use key attribute. And key must be unique.
    return (
        <div>
            {{jokeComponents}  /* new array of JokeData with props   */}
        </div>
    )
}

export default App