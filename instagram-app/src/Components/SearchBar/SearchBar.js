import React from 'react';
import './SearchBar.css';
import styled from 'styled-components'

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
    flex-direction: column;
    margin: 0 10px;
`;

const SearchBar = (props) => {
    return (
    <WrapperDiv>
            <div className="sb-logo">
                <h1>INSTAGRAM</h1>
                {/* <img></img> */}
            </div>
        <div className='search-input'>
            <input type="text" placeholder="Search..." onChange={props.searchPosts}/>
        </div>
        <SocialIconsDiv>
            <IconDiv>
                <i />
                <p>Icon1</p>
            </IconDiv>
            <IconDiv>
                <i />
                <p>Icon2</p>
            </IconDiv>
            <IconDiv>
                <i />
                <p>Icon3</p>
            </IconDiv>
        </SocialIconsDiv>
    </WrapperDiv>
    )
}

export default SearchBar; 