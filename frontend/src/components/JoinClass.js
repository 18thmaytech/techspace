import React from 'react';
import { useNavigate } from 'react-router-dom';

const JoinClass = () => {
    const navigate = useNavigate();

    return (
        <div className="join-class">
            <button onClick={() => navigate('/dashboard')}>Back</button>
            <img src="/path-to-image" alt="Bomaah Yaw" />
            <h3>Join Class</h3>
            <ul>
                <li>Class 1 - <span>Online</span> <button>Join</button></li>
                <li>Class 2 - <span>Online</span> <button>Join</button></li>
                <li>Class 3 - <span>Ended</span></li>
                <li>Class 4 - <span>Online</span> <button>Join</button></li>
                <li>Class 5 - <span>Later</span> <button>Alert</button></li>
            </ul>
        </div>
    );
};

export default JoinClass;
