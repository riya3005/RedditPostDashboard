import React from 'react'
import './PostEntry.css'
import CommentIcon from '@material-ui/icons/Comment';
import {connect} from 'react-redux'

const PostEntry = (props) => {
    const htmlDecode = (input) =>{
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    return (
        <div className='post'>
        <div dangerouslySetInnerHTML={{ __html: htmlDecode(props.post) }}/>
        <div className='noOfComments'> <CommentIcon className='commentIcon' fontSize='small'/> {props.comments.length} Comments </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        comments : state.comments
    };
}
export default connect(mapStateToProps, null)(PostEntry)
