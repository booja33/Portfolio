import React from 'react';
import './contact.css';

const ContactPage = () => {
    return (
        <section className="contact">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form</span>
                <form className="contactForm" aria-label="Contact Form">
                    <label htmlFor="name" className="visually-hidden">Your Name</label>
                    <input type="text" id="name" className="name" placeholder="Your Name" required />
                    
                    <label htmlFor="email" className="visually-hidden">Your Email</label>
                    <input type="email" id="email" className="email" placeholder="Your Email" required />
                    
                    <label htmlFor="message" className="visually-hidden">Your Message</label>
                    <textarea id="message" className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
                    
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactPage;
