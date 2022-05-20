import React from 'react';
import TruMedia from '../media/TruMedia.png';
const Loading = () => {
    
    return (
        <div className="loading">
            <img src={ TruMedia } alt="" />
            <h1 className="loading-text">Loading<span>.</span><span>.</span><span>.</span></h1>
        </div>
    )
}

export default Loading;
