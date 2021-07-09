import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="title"><strong>Enter or Create your name & your Room-Id</strong></h1>
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Your Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room ID " className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign - In</button>
        </Link>
        <h2 className="heading1">How to use?</h2>
        <h2 className="footer"> 1. Enter your name.<br></br> 2. Create a room ID or enter one if you have.
        <br></br>3. Share the Room-ID with friends if you have created it. <br></br> 4. Enjoy Texting !!! </h2>
      </div>
    </div>
  );
}
