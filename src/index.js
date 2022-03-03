import React from "react"
import ReactDOM from "react-dom"
import Link from "./Link.component"

function Greeting() {
  return <h1><Link link="http://google.com"/> This is Fernando and this is my first component</h1>
}
ReactDOM.render(<Greeting/>, document.getElementById("root"))