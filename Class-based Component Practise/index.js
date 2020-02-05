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


//2-Functional Component

function Header(props) {
    return (
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
}

//2-Class-Based Component

class Header extends React.Component {
    render() {
        return (
            <header>
                {<p>Welcome, {this.props.username}!</p>}
                {/* İf you are using Class-Based Components ,you dont need to add props as a parameter
                    For this you can use 'this' statement */}
            </header>
        )    
    }
}