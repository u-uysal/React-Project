import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["hello"]
        }
    }
 
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 ? 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
                    null,
                    {/* Hiç okunmamış mesajımız yoksa ve onu ekranda görmek istemiyorsak
                    ternany operatorü kullanabiliriz */}
                }
            </div>
        )
    }
}

export default App
