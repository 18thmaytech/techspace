import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskOfTheDay = () => {
    const navigate = useNavigate();

    return (
        <div className="task-of-the-day">
            <button onClick={() => navigate('/dashboard')}>Back</button>
            <img src="/path-to-image" alt="Bomaah Yaw" />
            <h3>Spelling Skills</h3>
            <div className="task-box">
                <p>Complete the word: s_mpl_</p>
            </div>
            <button>Start</button>
        </div>
    );
};

export default TaskOfTheDay;
