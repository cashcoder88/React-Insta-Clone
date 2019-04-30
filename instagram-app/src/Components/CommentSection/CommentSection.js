import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
            </div>
            <div className="add-new-comment">
                <form onSubmit=''>
                    <input type="text" placeholder="Add New Comment..." />
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


  
