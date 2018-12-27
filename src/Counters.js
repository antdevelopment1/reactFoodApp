import React from 'react';

const Counters = (props) => {
    return (
        <div className="counter-btn-container">
            <div className="button">
                <button className="button1" onClick={() => { props._LikeMe() }}>Likes: {props.likes}</button>
            </div>
            <div className="button">
                <button className="button2" onClick={() => { props._DislikeMe() }}>Dislikes: {props.unlikes}</button>
            </div>
        </div>
    )
}

export default Counters;