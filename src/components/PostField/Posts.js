import React, { Component } from 'react'
import Comments from '../CommentsSection/Comments'
import PostEntry from './PostEntry'
import './Posts.css'

class Posts extends Component {
    render() {
        return (
            <div className='posts'>
                <PostEntry post={this.props.postDetails}/>
                <Comments/>
            </div>
        )
    }
}

export default Posts
