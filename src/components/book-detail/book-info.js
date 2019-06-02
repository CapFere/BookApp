import React from 'react';

const BookInfo=props=>{
    return(
        <div className="col-sm-7">
            <h2 className="display-4">{props.title}</h2>
            <h4 className="lead font-italic">{props.author}</h4>
            <p className="lead">{props.description}</p>
        </div>
    );
};
export default BookInfo;
