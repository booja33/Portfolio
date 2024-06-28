// src/components/Skills.js
import React from 'react';
import './skills.css';
import HtmlLogo from '../../assets/html.png';
import CssLogo from '../../assets/css.png';
import JsLogo from '../../assets/javascript.png';
import ReactLogo from '../../assets/react.png';
import BootstrapLogo from '../../assets/bootstrap.png';
import MySQLLogo from '../../assets/mysql.png';
import FigmaLogo from '../../assets/figma.png';
import JavaLogo from '../../assets/java.png';
import PythonLogo from '../../assets/python.png';

const Skills = () => {
  return (
    <section id="Skills">
      <span className='skillTitle'>Skills</span>
    
      <div className="skillBars">
        <div className="skillBar">
          <img src={HtmlLogo} alt="HTML" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={CssLogo} alt="CSS" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CSS</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={JsLogo} alt="JavaScript" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={ReactLogo} alt="React.js" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React.js</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={BootstrapLogo} alt="Bootstrap" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Bootstrap</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={MySQLLogo} alt="MySQL" className="skillBarImg" />
          <div className="skillBarText">
            <h2>MySQL</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={FigmaLogo} alt="Figma" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Figma</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={JavaLogo} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={PythonLogo} alt="Python" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Python</h2>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Skills;
