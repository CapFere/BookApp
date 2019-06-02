import React from 'react';
import BookContainer from './book-container';
const BookDetail=props=>{
    return(
        <div className="container">
            <BookContainer book={props.book}/>
        </div>
    );
};
export default BookDetail;
