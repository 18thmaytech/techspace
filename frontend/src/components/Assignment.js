import React from 'react';
import { useNavigate } from 'react-router-dom';

const Assignments = () => {
    const navigate = useNavigate();

    return (
        <div className="assignments">
            <button onClick={() => navigate('/dashboard')}>Back</button>
            <img src="/path-to-image" alt="Bomaah Yaw" />
            <h3>Assignments</h3>
            <ul>
                <li>Assignment 1 - [uploaded assignments]</li>
                <li>Assignment 2 - [uploaded assignments]</li>
                <li>Assignment 3 - [uploaded assignments]</li>
                <li>Assignment 4 - [uploaded assignments]</li>
                <li>Assignment 5 - [uploaded assignments]</li>
            </ul>
        </div>
    );
};

export default Assignments;
