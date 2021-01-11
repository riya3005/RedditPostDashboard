import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import SubRedditName from './TitleBar/SubRedditName'
import Title from './TitleBar/Title'
import Posts from './PostField/Posts'
import './Layout.css'
import {connect} from 'react-redux'

class Layout extends Component {
   state = {
            subreddit_name : '',
            title : '',
            score : 0,
            post: '',
            //comments: []
        }
    componentDidMount(){
        axios.get('https://gist.githubusercontent.com/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json').then(response => {
            var subredditName = response.data["subreddit_name_prefixed"]
            var title = response.data["title"]
            var score = response.data["score"]
            var post = response.data["selftext_html"]
            var comments = response.data["comments"]
            this.props.updateComments(comments);
            this.setState({
                subreddit_name : subredditName,
                title : title,
                score : score,
                post: post,
                //comments : comments

            })
          }
         )
    }
    render() {
        return (
            <div className='layout'>
                <SubRedditName value={this.state.subreddit_name}/>
                <Title title={this.state.title} score={this.state.score}/>
                <Posts postDetails = {this.state.post}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments : state.comments
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateComments: (comments) => dispatch({ type: 'UPDATE COMMENTS', comments }),
       
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

