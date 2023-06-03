import './AboutContentStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/react1.jpg'
import img2 from '../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who I'm</h1>
            <p> I'm a hard-working, passionate person who believes in the importance of education and accessibility to technological advancements. I've always been passionate about learning new things.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={img1} alt="true" className='img' />
                </div>
                <div className="img-stack bottom" >
                     <img src={img2} alt="true" className='img' />
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default AboutContent