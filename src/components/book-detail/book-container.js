import React from 'react';
import BookReview from './book-review';
import BookInfo from './book-info';
const BookContainer=props=>{
    let book={
        image:props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.large : 'https://via.placeholder.com/150',
        title:props.book.volumeInfo.title ? props.book.volumeInfo.title : 'Lorem Ipsum',
        author:props.book.volumeInfo.authors ? props.book.volumeInfo.authors[0] : 'John Doe',
        description:props.book.volumeInfo.description ? props.book.volumeInfo.description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quo, consequuntur ab totam esse id quam vitae repellendus soluta ex cum ad, numquam quos eum impedit corporis natus voluptates modi.',
        rating:{
            averageRating:props.book.volumeInfo.averageRating,
            ratingCount:props.book.volumeInfo.retingsCount
        }
    };
    console.log(props.book.volumeInfo.description);
    return(
        <div className="row mb-5">
                <div className="col-sm-4">
                <img src={book.image} alt={book.title} className="mr-4 img-fluid"/>
                </div>
                <div className="col-sm-8">
                    <div className="row">
                    <BookInfo title={book.title} author={book.author} description={book.description}/>
                    <div className="col-sm-5">
                        <BookReview/>
                    </div>
                    </div>
            </div>
        </div>
    );
};
export default BookContainer;
