import React from 'react'
import '../styles/Video.css'
import image from '../assests/logo.png'
function Video() {
    return (
        <>
             <a href="quiz.html">
                 <div className="video">
              <img src={image} alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className="qmeta">
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
          </a>
        </>
    )
}

export default Video
