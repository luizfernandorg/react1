import React from "react"
import ReactDOM from "react-dom"

function BookList() {
  return (
    <section className="container-fluid">
      <Book/>
    </section>
  )
}
const Book = () => {
  return (
    <article className="row">
      <Image/>
    </article>
  )
}

const Image = () => (<img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL604_SR604,400_.jpg" alt="book"/>)

ReactDOM.render(<BookList/>, document.getElementById("root"))