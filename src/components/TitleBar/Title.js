import React from 'react'
import './Title.css'

const Title = (props) => {
    return (
        <div className='titleTab'>
            <div className='score'>{props.score/1000}k</div>
            <div className='title'>{props.title}</div>
        </div>
    )
}

export default Title
