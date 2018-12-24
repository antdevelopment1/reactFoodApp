import React from 'react';

const Counters = (props) => {
    return (
        <div>
            <button className="button1" onClick={() => { props._LikeMe() }}>Likes: {props.likes}</button>
            <button className="button2" onClick={() => { props._DislikeMe() }}>Dislikes: {props.unlikes}</button>
        </div>
    )
}

export default Counters;