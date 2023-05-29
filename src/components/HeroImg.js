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
            <p className="p1">Hello, My name is</p>
            <h1>Deendayal Dhakad</h1>
            <p className="p2">And, I'm an Engineer</p>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/resume" className="btn btn-light">Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg