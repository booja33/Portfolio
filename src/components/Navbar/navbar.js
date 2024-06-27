import React, { useState } from 'react';
import './navbar.css';

import Contact from '../../assets/contact.png'; // Assuming this is your contact icon
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <h3 className='logo'>BS</h3>

            {/* Desktop menu */}
            <div className="desktopMenu">
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to="about-container" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to="Skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass='active' to="certificate-container" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Certificate</Link>
            </div>

            {/* Contact button */}
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('Contact').scrollIntoView({ behavior: "smooth" });
            }}>
                <img src={Contact} alt="contact" className="desktopMenuImg" />Contact me
            </button>

            {/* Hamburger menu for mobile */}
            <div className="mobMenu" onClick={() => setShowMenu(!showMenu)}>
                <div className={`bar ${showMenu ? 'open' : ''}`}></div>
                <div className={`bar ${showMenu ? 'open' : ''}`}></div>
                <div className={`bar ${showMenu ? 'open' : ''}`}></div>
            </div>

            {/* Mobile menu */}
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => { setShowMenu(false) }}>Home</Link>
                <Link activeClass='active' to="about-container" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => { setShowMenu(false) }}>About</Link>
                <Link activeClass='active' to="Skills" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => { setShowMenu(false) }}>Skills</Link>
                <Link activeClass='active' to="certificate-container" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => { setShowMenu(false) }}>Certificate</Link>
                <Link activeClass='active' to="Contact" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => { setShowMenu(false) }}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;
