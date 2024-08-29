import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChooseRole = () => {
    const navigate = useNavigate();

    return (
        <div className="choose-role">
            <h2>Choose Your Role</h2>
            <button onClick={() => navigate('/student-sign-in')}>Student</button>
            <button onClick={() => navigate('/facilitator-sign-in')}>Facilitator</button>
        </div>
    );
};

export default ChooseRole;
