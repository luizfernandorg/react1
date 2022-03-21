import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Book from './Book.component'
import {livros} from './livros'

function BookList() {
  return (
      <section className="row">
      {
          //livros.map((e,i) => <Book key={e.id} title={e.title} author={e.author} url={e.url}/>)
          livros.map((e,i) => <Book key={e.id} {...e}/>)
      }
      </section>
  )
}
ReactDOM.render(<BookList/>, document.getElementById("root"))