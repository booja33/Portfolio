import React from 'react';
import './about.css';
import CV from '../../assets/resume.pdf';

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
                        <p><strong>Email:</strong> boojasree03@gmail.com</p>
                        <p><strong>Phone:</strong> 6381858023</p>
                        <p><strong>DOB:</strong> 15-03-2003</p>
                    </div>
                    <div className="info-right">
                        <p><strong>Age:</strong> 21</p>
                        <p><strong>Address:</strong> Nagercoil</p>
                        <p><strong>Degree:</strong> BTech</p>
                    </div>
                </div>
            </div>
            {/* Wrap the button in the anchor tag */}
            <a href={CV} download="Booja_Sree_Resume.pdf" aria-label="Download Booja Sree's Resume">
                <button className="download-btn">Download Resume</button>
            </a>
        </div>
    );
}

export default About;
