import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();

    return (
        <div className="sign-in">
            <h2>Student Sign In</h2>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>
            <a href="/forgot-password">Forgot Password?</a>
            <p>
                I don't have an account?{' '}
                <span onClick={() => navigate('/student-sign-up')}>Sign Up</span>
            </p>
        </div>
    );
};

export default SignIn;
