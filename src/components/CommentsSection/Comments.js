import React, {Component} from 'react';
import Comment from './Comment';
import './Comments.css';
import {connect} from 'react-redux';

class Comments extends Component {
  //Deleting the child comments as well
  delClickHandler = (e) => {
    var updatedComments = this.props.comments.filter(
      (comment) => comment.id !== e && comment.parent_id !== e
    );
    this.props.updateComments(updatedComments);
  };
  render() {
    var display;
    return (
      <div>
        {this.props.comments.map((element) => {
          var commentToBeDisplayed;
          if (!element.hasOwnProperty('parent_id')) {
            commentToBeDisplayed = (
              <Comment
                key={element.id}
                value={element}
                clickHandler={this.delClickHandler}
                allComments={this.props.comments}
              />
            );
          }
          return commentToBeDisplayed;
        })}
        {display}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateComments: (comments) => dispatch({type: 'UPDATE COMMENTS', comments}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
