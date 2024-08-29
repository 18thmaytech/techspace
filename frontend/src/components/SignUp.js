import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className="sign-up">
            <h2>Student Sign Up</h2>
            <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone Number" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                I already have an account?{' '}
                <span onClick={() => navigate('/student-sign-in')}>Sign In</span>
            </p>
        </div>
    );
};

export default SignUp;
