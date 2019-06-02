import React from 'react';
import {Link} from 'react-router-dom';
const PageNotFound=props=>{
    return(
        <div className="container text-center">
            <p className="text-danger error-icon"><i class="fas fa-exclamation-circle"></i></p>
            <p className="error-text pb-0">404</p>
            <p className="lead">Page Not Found</p>
            <p><Link to="/"><span><i className="fas fa-home"></i></span> Back Home</Link></p>
      </div>
    );
};
export default PageNotFound;
