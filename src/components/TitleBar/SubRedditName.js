import React from 'react'
import './SubRedditName.css'

const SubRedditName = (props) => {
    return (
        <div className='subredditName'>
            {props.value}
        </div>
    )
}

export default SubRedditName
