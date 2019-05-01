import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
    <div className="search-container">
            <div className="sb-logo">
                <h1>INSTAGRAM</h1>
                {/* <img></img> */}
            </div>
        <div className='search-input'>
            <input type="text" placeholder="Search..." onChange={props.searchPosts}/>
        </div>
        <div className="social-icons">
            <div className="icon">
                <i />
                <p>Icon1</p>
            </div>
            <div className="icon">
                <i />
                <p>Icon2</p>
            </div>
            <div className="icon">
                <i />
                <p>Icon3</p>
            </div>
        </div>
    </div>
    )
}

export default SearchBar; 