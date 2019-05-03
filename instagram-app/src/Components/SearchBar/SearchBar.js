import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 6px grey;
`;

const SocialIconsDiv = styled.div`
    display: flex;
`;

const IconDiv = styled.div`
    font-size: 30px;
    flex-direction: column;
    margin: 0 10px;
`;

const InstaDiv = styled.div`
    font-size: 35px;
`;



const SearchBar = (props) => {
    return (
    <WrapperDiv>
            <InstaDiv>
                <i class="fab fa-instagram">{' '} | {' '} INSTAGRAM</i>
            </InstaDiv>
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