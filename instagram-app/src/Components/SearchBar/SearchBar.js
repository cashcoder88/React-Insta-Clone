import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 6px grey;
    margin: 5px 10px;
    
`;

const SocialIconsDiv = styled.div`
    display: flex;
`;

const IconDiv = styled.div`
    font-size: 30px;
    flex-direction: column;
    margin: 0 20px;
`;

const InstaDiv = styled.div`
    font-size: 35px;
`;

const InputStyleSearch = styled.input`
    width: 150px;
    height: 25px;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
`;


const SearchBar = (props) => {
    return (
    <WrapperDiv>
            <InstaDiv>
                <i class="fab fa-instagram">{' '} | {' '} INSTAGRAM</i>
            </InstaDiv>
        <div className='search-input'>
            <InputStyleSearch type="text" placeholder="Search..." onChange={props.searchPosts}/>
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