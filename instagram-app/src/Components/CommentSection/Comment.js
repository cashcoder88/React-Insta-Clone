import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpanTextUser = styled.span`
    font-size: 18px;
    margin: 7px;
`;


const SpanTextComment = styled.span`
    font-size: 14px;
`;

const Comment = props => {
    return (
        <div className='comment-info'>
            <SpanTextUser className='comment-user'>{props.comment.username}</SpanTextUser>
            <SpanTextComment className='comment-text'>{props.comment.text}</SpanTextComment>
        </div>
    )
}

  Comment.propTypes = {
      comment: PropTypes.shape({
          text: PropTypes.string,
          username: PropTypes.string
      })
  };
export default Comment;
