import React from 'react';
import styled from 'styled-components';

const IconWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.div`
    flex-direction: row;
    font-size: 25px;
    margin: 5px;
    flex-wrap: wrap;
`;

const LikesNum = styled.div`
    flex-direction: column;
    flex-wrap: wrap;
`;


const Likes = props => {
    return (
        <IconWrap>
            <Icon onClick={props.incrementLikes}>
                <i class="far fa-heart"></i>
            </Icon>
            <Icon>
                <i class="far fa-comment"></i> 
            </Icon> 
            <LikesNum>
                <div>{props.likes} likes</div>
            </LikesNum>
        </IconWrap>
    )
}

export default Likes;