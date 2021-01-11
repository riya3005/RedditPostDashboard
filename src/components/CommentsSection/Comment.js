import React from 'react';
import './Comment.css';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';

const Comment = (props) => {
  var commentDetails = props.value;
  var date = new Date(commentDetails['created_utc']);

  const htmlDecode = (input) => {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  };

  const childComments = () => {
    const value = commentDetails
    const allComments = props.allComments
    return allComments.filter(c => c.parent_id === value.id)
  }

  return (
    <div>
      <div className="commentDetails">
        <div className="author">{commentDetails['author']}</div>
        <div className="points">
          {commentDetails['ups'] > 1000
            ? `${commentDetails['ups'] / 1000}k`
            : commentDetails['ups']}{' '}
          points - {moment(date).fromNow()}
        </div>
        <DeleteIcon
          fontSize="small"
          className="delButton"
          onClick={() => props.clickHandler(commentDetails.id)}
        />
      </div>
      <div
        className="commententry"
        dangerouslySetInnerHTML={{
          __html: htmlDecode(commentDetails['body_html']),
        }}
      />
      <div className="simpleNested">
      {
      childComments().map(ele => (
        <Comment 
        key={ele.id}
        value={ele}
        clickHandler={props.clickHandler}
        allComments={props.allComments}
        parent_id={ele.id}
        />
      ))
    }
      </div>
      
    </div>
  );
};

export default Comment;
