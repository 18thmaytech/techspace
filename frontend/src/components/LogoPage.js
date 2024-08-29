import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoPage.css'; // Import the CSS file
import logo from '../assets/images/logo.png'; // Adjust the import path

const LogoPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/choose-role');
        }, 2000); // Adjust the delay as needed
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="logo-page">
            <img src={logo} alt="Logo" className="logo-image" />
            <h1>Welcome to Student Learning Platform</h1>
        </div>
    );
};

export default LogoPage;
