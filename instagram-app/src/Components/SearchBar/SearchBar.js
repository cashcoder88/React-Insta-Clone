import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="sb-wrapper">
            <div className="sb-logo">
                <h1>INSTAGRAM</h1>
                {/* <img></img> */}
            </div>
        <div>
            <input type="text" placeholder="Search..." />
        </div>
        <div className="social-icons">
            <div className="social">
                <i />
            </div>
            <div className="social">
                <i />
            </div>
            <div className="social">
                <i />
            </div>
        </div>
        </div>
    )
}

export default SearchBar; 