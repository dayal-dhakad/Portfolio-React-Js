import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hello, My name is</p>
            <h1>Deendayal Dhakad</h1>
            <p>And, I'm an Engineer</p>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/resume" className="btn">Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg