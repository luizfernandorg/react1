import React from "react"
import ReactDOM from "react-dom"
import Link from "./Link.component"

// function Greeting() {
//   return <h1><Link link="http://google.com"/> This is Fernando and this is my first component</h1>
// }
// const Greeting = () => React.createElement("h1", {}, "Hello World")
const Greeting = () => (<div> 
                          <h1>Hello World!</h1>
                        </div>)

ReactDOM.render(<Greeting/>, document.getElementById("root"))