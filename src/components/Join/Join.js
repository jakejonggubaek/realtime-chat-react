import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {

    const [ name, setName ] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-page">
            <div className="join-page-container">
                <h1 className="header">Join</h1>
                <div>
                    <input type="text" className="join-input" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input type="text" className="join-input" placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
                </div>
                <Link onClick={(e)=>(!name||!room)?e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;