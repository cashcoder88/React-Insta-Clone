import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SocialIconsDiv = styled.div`
    display: flex;
`;

const IconDiv = styled.div`
    font-size: 30px;
    flex-direction: column;
    margin: 0 10px;
`;

const SearchBar = (props) => {
    return (
    <WrapperDiv>
            <div className="sb-logo">
                <i class="fab fa-instagram"></i>
                <h1>INSTAGRAM</h1>
                {/* <img></img> */}
            </div>
        <div className='search-input'>
            <input type="text" placeholder="Search..." onChange={props.searchPosts}/>
        </div>
        <SocialIconsDiv>
            <IconDiv>
                <i class="far fa-clock"></i>
            </IconDiv>
            <IconDiv>
                <i class="far fa-heart"></i>
            </IconDiv>
            <IconDiv>
                <i class="far fa-user"></i>
            </IconDiv>
        </SocialIconsDiv>
    </WrapperDiv>
    )
}

export default SearchBar; 