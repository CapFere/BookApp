import React from 'react';
import BookContainer from './book-container';
const BookSection=props=>{
    if(props.book.length===0){
        return(           
            <div className="container">
             <h1 className="display-4 mb-5">{`No Books Found For ${props.title} Books`}</h1>
         </div>
     );
    }else{
        return(           
            <div className="container">
             <h1 className="display-4 mb-5">{`${props.title} Books`}</h1>
             <BookContainer books={props.book}/>
         </div>
     );
    }
    
};
export default BookSection;
