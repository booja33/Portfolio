import React from 'react';
import './intro.css';
import { FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';



const Intro = () => {
  return (
    <section id='intro' className="intro-section">
      <div className="intro-content">
        <h1 className="intro-heading">
          Hello, I'm <span className="intro-name">Booja Sree</span>
        </h1>
        <p className="intro-role">
          Full Stack Developer
        </p>
        <p className="intro-description">
          I'm a seasoned web designer and full stack developer dedicated to crafting visually striking and user-friendly digital experiences that drive results.
        </p>
        
        <div className='container'>
          <p className='text'>Check Out My</p>
          <div className='icons-container'>
            <div className='icon'>
            <a  href="https://www.instagram.com/booja.__.chan?igsh=bTY0MG1oazRvNm10" target='_blank' rel='noopener noreferrer' >
              <FaInstagram size={30}  color='#c9a372' />
              </a>
              <a  href="https://www.linkedin.com/in/booja-sree-s" target='_blank' rel='noopener noreferrer' >
              <FaLinkedin size={30}  color='#c9a372' />
            </a>
            <a  href="https://www.linkedin.com/in/booja-sree-s" target='_blank' rel='noopener noreferrer' >
              <FaGithub size={30}  color='#c9a372' />
            </a>
          </div>
          </div>
        </div>  
      </div>
      
    </section>
    

  );
};

export default Intro;
