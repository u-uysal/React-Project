//1-Functional Component

function App() {
    return (                                        
        <div>
            <Header />
            <Greeting />
        </div>
    )
}

//1-Class-Based Component
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Greeting />
            </div>
        )    
    }
}
