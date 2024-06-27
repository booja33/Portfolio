import React from 'react';
import './certificate.css'; // Import CSS file
import certificates from './certificatedata'; // Import certificate data


const Certificate = () => {
    return (
        <div className="certificate-container">
         <h1 className="certificate-heading">Certificate</h1>
            {certificates.map(certificate => (
                <div key={certificate.id} className="certificate-card">
                    <img src={certificate.image} alt={certificate.title} className="certificate-image" />
                    <h2 className="certificate-title">{certificate.title}</h2>
                    <p className="certificate-description">{certificate.description}</p>
                    <p className="certificate-date">{certificate.date}</p>
                </div>
            ))}
        </div>
    );
}

export default Certificate;
