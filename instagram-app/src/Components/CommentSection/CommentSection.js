import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CommentDiv = styled.div`
    display: flex;
    margin: 0 10px;
    flex-direction: column;
    align-items: flex-start;
`;

const FormStyle = styled.form`
    display: flex;
    justify-content: center;
`;

const InputStyle = styled.input`
    width: 150px;
    height: 25px;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    
`;

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }


    commentHandler = e => {
        this.setState({ comment: e.target.value });
      };


    addNewComment = e => {
        e.preventDefault();
        this.state.comments.push({ text: this.state.comment, username: localStorage.user});
        this.setState({ comment: '' })
    }


    render() {
        return (
            <CommentDiv>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <FormStyle onSubmit={this.addNewComment}>
                    <InputStyle 
                    type="text" 
                    placeholder="Add New Comment..." 
                    value={this.state.comment} 
                    onChange={this.commentHandler}
                    />
                </FormStyle>
            </CommentDiv>

        );
    };
};


  CommentSection.propTypes = {
      comments: PropTypes.arrayOf(
          PropTypes.shape(
              { 
                  text: PropTypes.string, 
                  username: PropTypes.sring
              })
        )
  }

export default CommentSection;


  
