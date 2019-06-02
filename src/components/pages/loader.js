import React from 'react';
import Loader from 'react-loaders';

const MyLoader=props=>{
    return(
        <div className="loader text-center">
            <Loader type="pacman"/>
        </div>
        
    );
};
export default MyLoader;
