import React from 'react';

const BookReview=props=>{
    return(
        <div>
            <div className="d-inline review-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <span className="ml-sm-1">
                (11)
            </span>
        </div>
    );
};
export default BookReview;
