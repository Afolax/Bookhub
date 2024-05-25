import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from '../SearchForm/SearchForm'
import './Header.css';


const Header = () => {
    return ( 
        <div className="holder">
            <header className="header">
                < Navbar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">Find Your book of choice
                    </h2><br />
                    <p className="header-text fs-18 fw-3">It is a long established fact that a reader will be distracted by the readable content
                     of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                     of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                     packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many 
                     web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
                     (injected humour and the like).

                    </p>
                    <SearchForm/>
                </div>
            </header>   

        </div>
    );
}
 
export default Header;