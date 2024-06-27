import React, {useState} from 'react';
import './navbar.css';

import Contact from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar =() => {
    const [showMenu,setShowMenu]=useState(false)

    return(
        <nav className="navbar">
            <h3 className='logo'>BS</h3>
        <div className="desktopMenu">
        <Link activeClass='active' to="intro" spy  ={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to="about-me" spy  ={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to="Skills" spy  ={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to="certificate-container" spy  ={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Certificate</Link>
        </div>  
        <button className="desktopMenuBtn" onClick={() =>{
            document.getElementById('Contact').scrollIntoView({behavior: "smooth"});
        }}>
            <img src={Contact} alt="contact" className="desktopMenuImg" />Contact me</button>
            <img src={menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to="intro" spy  ={true} smooth={true} offset={-100}  duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Home</Link>
        <Link activeClass='active' to="about-me" spy  ={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>About</Link>
        <Link activeClass='active' to="Skills" spy  ={true}  smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Skills</Link>
        <Link activeClass='active' to="certificate-container" spy  ={true}  smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Certificate</Link>
        <Link activeClass='active' to="Contact" spy  ={true}  smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Contact</Link>
        </div> 
        </nav> 

    )
}

export default Navbar; 