import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

const livros = [
  {
    'id': 1,
    'title':"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    'author':"James Clear",
    'url':"https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL204_SR204,250_.jpg"
  },
  {
    'id': 2,
    'title':"Cracking the Coding Interview: 189 Programming Questions and Solutions",
    'author':"Gayle Laakmann McDowell",
    'url':"https://images-na.ssl-images-amazon.com/images/I/619M-4xNINL._AC_UL204_SR204,250_.jpg"
  },
  {
    'id': 3,
    'title':"Algorithms to Live By: The Computer Science of Human Decisions",
    'author':"Brian Christian (Author, Narrator), Tom Griffiths (Author), Brilliance Audio (Publisher)",
    'url':"https://images-na.ssl-images-amazon.com/images/I/81WKzuPInFL._AC_UL204_SR204,250_.jpg"
  },
  {
    'id': 4,
    'title':"Automate the Boring Stuff with Python, 2nd Edition: Practical Programming for Total Beginners",
    'author':"Al Sweigart",
    'url':"https://images-na.ssl-images-amazon.com/images/I/71vxm9Lc4cL._AC_UL204_SR204,250_.jpg"
  },
  {
    'id': 5,
    'title':"Thinking in Systems: International Bestseller",
    'author':"Donella H. Meadows",
    'url':"https://images-na.ssl-images-amazon.com/images/I/81a9hH8cL+L._AC_UL204_SR204,250_.jpg"
  },
]
const clickHandler = (event,author) => {
  console.log(event.target)
  console.log(author)
}

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
const Book = ({title,author,url}) => {
  return (
    <article className="col-sm-4 col-md-4 col-xl-2">
      <Image url={url}/>
      <Title title={title}/>
      <Author author={author}/>
      <button type="button" onClick={(event) => clickHandler(event,author)}>Click</button>
    </article>
  )
}

const Image = ({url,children}) => (<><img src={url} alt="book" className="img-fluid"/>{children}</>)
const Title = ({title}) => (<h1 className="title">{title}</h1>)
const Author = ({author}) => (<h4 className="author">{author}</h4>)

ReactDOM.render(<BookList/>, document.getElementById("root"))