import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
const livros = [
  {
    'title':"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    'author':"James Clear",
    'url':"https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL204_SR204,250_.jpg"
  },
  {
    'title':"Cracking the Coding Interview: 189 Programming Questions and Solutions",
    'author':"Gayle Laakmann McDowell",
    'url':"https://images-na.ssl-images-amazon.com/images/I/619M-4xNINL._AC_UL204_SR204,250_.jpg"
  },
  {
    'title':"Algorithms to Live By: The Computer Science of Human Decisions",
    'author':"Brian Christian (Author, Narrator), Tom Griffiths (Author), Brilliance Audio (Publisher)",
    'url':"https://images-na.ssl-images-amazon.com/images/I/81WKzuPInFL._AC_UL204_SR204,250_.jpg"
  },
  {
    'title':"Automate the Boring Stuff with Python, 2nd Edition: Practical Programming for Total Beginners",
    'author':"Al Sweigart",
    'url':"https://images-na.ssl-images-amazon.com/images/I/71vxm9Lc4cL._AC_UL204_SR204,250_.jpg"
  },
  {
    'title':"Thinking in Systems: International Bestseller",
    'author':"Donella H. Meadows",
    'url':"https://images-na.ssl-images-amazon.com/images/I/81a9hH8cL+L._AC_UL204_SR204,250_.jpg"
  },
]
const rows = []
function BookList() {
  return (
    <section className="row">
      {
        livros.map((e,i) => <Book title={e.title} author={e.author} url={e.url}/>)
      }  
    </section>
  )
}
const Book = (props) => {
  const {title,author,url} = props
  return (
    <article className="col-xl-3">
      <Image url={url}/>
      <Title title={title}/>
      <Author author={author}/>
    </article>
  )
}

const Image = (props) => (<img src={props.url} alt="book"/>)
const Title = (props) => (<h1 className="title">{props.title}</h1>)
const Author = (props) => (<h4 className="author">{props.author}</h4>)

ReactDOM.render(<BookList/>, document.getElementById("root"))