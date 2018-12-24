import React from 'react';

const Counters = (props) => {
    return (
        <div className="counter-btn-container">
            <div className="button">
                <a className="button1" onClick={() => { props._LikeMe() }}>Likes: {props.likes}</a>
            </div>
            <div className="button">
                <a className="button2" onClick={() => { props._DislikeMe() }}>Dislikes: {props.unlikes}</a>
            </div>
        </div>
    )
}

export default Counters;