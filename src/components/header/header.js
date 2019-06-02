import React from 'react';
import {NavLink,Link} from 'react-router-dom';
const Header=props=>{
    return(
        <header>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
            <Link className="navbar-brand" to="/">
              <i className="fas fa-book-open"></i>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
            </button>
            <div className="ml-auto collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto p-5">
              <li className="nav-item"><NavLink to="/books/catagory/HTML" className="nav-link">HTML</NavLink></li>
              <li className="nav-item"><NavLink to="/books/catagory/CSS" className="nav-link">CSS</NavLink></li>
              <li className="nav-item"><NavLink to="/books/catagory/JavaScript" className="nav-link">JavaScript</NavLink></li>
              <li className="nav-item"><NavLink to="/books/catagory/React" className="nav-link">React</NavLink></li>
              <li className="nav-item"><NavLink to="/books/catagory/NodeJS" className="nav-link">NodeJS</NavLink></li>
            </ul>
            </div>
          </nav>
        </header>
    );
};
export default Header;
