import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

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
        this.state.comments.push({ text: this.state.comment, username: 'cashglobe' });
        this.setState({ comment: '' })
    }


    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <form onSubmit={this.addNewComment}>
                    <input 
                    type="text" 
                    placeholder="Add New Comment..." 
                    value={this.state.comment} 
                    onChange={this.commentHandler}
                    />
                </form>
            </div>

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


  
