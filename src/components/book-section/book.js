import React from 'react';
import {Link} from 'react-router-dom';
const Book=props=>{
    let book={
        image:props.book.volumeInfo.imageLinks?props.book.volumeInfo.imageLinks.thumbnail:'https://via.placeholder.com/150',
        title:props.book.volumeInfo.title?props.book.volumeInfo.title:'Lorem Ipsum',
        author:props.book.volumeInfo.authors? props.book.volumeInfo.authors[0] : 'John Doe',
        id:props.book.id
    };
    return(
        <div className="col-sm-6 col-lg-4 mb-3">
            <div className="card">
                <img className="card-img-top" src={book.image} alt={book.title}/>
                <div className="card-body ">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text lead">{book.author}</p>
                    <Link to={`/book/${book.id}`} className="btn btn-light">Detail</Link>
                </div>
            </div>
        </div>
    );
};
export default Book;