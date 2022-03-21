import React from "react"

const clickHandler = (event,author) => {
    console.log(event.target)
    console.log(author)
    alert(author)
}

const Image = ({url,children}) => (<><img src={url} alt="book" className="img-fluid"/>{children}</>)
const Title = ({title}) => (<h1 className="title">{title}</h1>)
const Author = ({author}) => (<h4 className="author">{author}</h4>)

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

export default Book;