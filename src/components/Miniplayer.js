import React from 'react'
import mini from '../assests/logo.png'
import '../styles/Miniplayer.css';

function Miniplayer() {
    return (
        <div className="miniPlayer floatingBtn">
        <span className="material-icons-outlined open"> play_circle_filled </span>
        <span className="material-icons-outlined close"> close </span>
        <img src={mini} alt="miniplayer" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    )
}

export default Miniplayer
