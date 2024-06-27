import React from 'react';
import './contact.css';



const ContactPage = () => {
    return(
        <section className="Contact">
        <div id="Contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form</span>
        <form className="contactForm" >
            <input type="text" className="name" placeholder='Your Name' />
        <input type="email" className="email" placeholder='Your Email'  />
        <textarea className="msg" name="message" rows="5"  placeholder='Your Message'></textarea>
        <button type="submit" value="send" className='submitBtn'>Submit </button>
       

      </form>
      </div>
    </section>
    );
}

export default ContactPage;