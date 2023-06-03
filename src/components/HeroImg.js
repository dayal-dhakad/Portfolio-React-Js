import "./HeroImgStyles.css";
import Typewriter from "typewriter-effect";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import Resumee from "../assets/Resumee.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p className="p1">Hello, I'm</p>
            <h1>Deendayal Dhakad</h1>
            <div className="p2">
            <p className="p2"><Typewriter
                onInit={(typewriter) => {
                    typewriter
                    
                        .typeString("And I'm an Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("And I'm a Software Developer")
                        .deleteAll()
                        .typeString("And I'm an Engineer")
                        .start();
                }}
            /></p>
            </div>

         
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to={Resumee} className="btn btn-light">Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg