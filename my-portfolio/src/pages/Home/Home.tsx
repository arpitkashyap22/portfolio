import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1>Welcome, I'm Arpit Kashyap</h1>
                <p>Full Stack Developer | Innovator | Problem Solver</p>
                <div className="landing-buttons">
                    <a href="#about" className="btn-primary">Learn More</a>
                    <a href="#contact" className="btn-secondary">Get in Touch</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
