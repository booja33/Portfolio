import React, { useState } from 'react';
import './about.css'; // Import the CSS file for styles

const About = () => {
  const [userData] = useState({
    name: 'Booja',
    dateOfBirth: 'March 15, 2003',
    phoneNumber: '6381858023',
    address: 'Nagercoil'
  });

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        
        <div className="user-info">
          <div className="detail">
            <p><strong>Name:</strong></p>
            <p>{userData.name}</p>
          </div>
          <div className="detail">
            <p><strong>Date of Birth:</strong></p>
            <p>{userData.dateOfBirth}</p>
          </div>
          <div className="detail">
            <p><strong>Phone Number:</strong></p>
            <p>{userData.phoneNumber}</p>
          </div>
          <div className="detail">
            <p><strong>Address:</strong></p>
            <p>{userData.address}</p>
          </div>
        </div>
        
        <p>
          Hi, I'm {userData.name}! Welcome to my profile. I believe in creating user-centric designs that blend aesthetics with functionality, striving to elevate brands and enhance user experiences online.


        </p>
      </div>
    </div>
  );
};

export default About;