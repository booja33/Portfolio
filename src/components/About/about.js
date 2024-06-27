import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <p>
             Welcome to my profile. I believe in creating user-centric designs that blend aesthetics with functionality, striving to elevate brands and enhance user experiences online.
            </p>
            <div className="info-box">
                <div className="info">
                    <div className="info-left">
                        <p><strong>Name:</strong> Booja Sree</p>
                        <p><strong>Email:</strong>boojasree03@gmail.com</p>
                        <p><strong>Phone:</strong> 6381858023</p>
                    </div>
                    <div className="info-right">
                        <p><strong>Address:</strong> Nagercoil</p>
                        <p><strong>Degree:</strong> BTech</p>
                        
                    </div>
                </div>
            </div>
            <button className="download-btn">Download CV</button>
        </div>
    );
}

export default About;
