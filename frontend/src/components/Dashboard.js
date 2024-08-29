import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <h2>Welcome Bomaah Yaw</h2>
            <img src="/path-to-image" alt="Bomaah Yaw" />
            <p>Level 56, Completed Tasks: 5</p>
            <button onClick={() => navigate('/task-of-the-day')}>Task of the Day</button>
            <button onClick={() => navigate('/assignments')}>Assignments</button>
            <button onClick={() => navigate('/join-class')}>Join Class</button>

            <nav className="bottom-nav">
                <div onClick={() => navigate('/more-options')}>
                    <span>More Options</span>
                </div>
                <div onClick={() => navigate('/chat')}>
                    <span>Chat</span>
                </div>
                <div onClick={() => navigate('/')}>
                    <span>Home</span>
                </div>
                <div onClick={() => navigate('/monitor')}>
                    <span>Monitor</span>
                </div>
            </nav>
        </div>
    );
};

export default Dashboard;
