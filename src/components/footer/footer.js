import React from 'react';

const Footer=props=>{
    return(
        <footer className="bg-dark  text-light text-center">
            <p className="font-weight-bold">Stay Connected</p>
            <div className="connection">
                <a href="" className="p-2 "><i className="fab fa-facebook-f"></i></a>
                <a href="" className="p-2 "><i className="fab fa-twitter"></i></a>
                <a href="" className="p-2 "><i className="fab fa-instagram"></i></a>    
            </div>
      </footer>
    );
};
export default Footer;
