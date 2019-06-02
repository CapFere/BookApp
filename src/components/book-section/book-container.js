import React from 'react';
import Book from './book';
const BookContainer=props=>{
    return(
        <div className="row">
            {props.books.map((e,i)=>{
                return(<Book book={e} key={i}/>);
            })}
        </div>
    );
};
export default BookContainer;
