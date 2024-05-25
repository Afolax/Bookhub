import React from "react";
import loaderImg from '../../../imgs/infinite-spinner.svg'

import './Loader.css'

const Loader = () => {
    return ( 
        <div className="loader flex flex-c">
            <img src={loaderImg} alt="loader" />

        </div>
     );
}
 
export default Loader;
