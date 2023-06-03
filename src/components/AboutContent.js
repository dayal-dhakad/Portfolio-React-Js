import './AboutContentStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'


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
                    <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="true" className='img' />
                </div>
                <div className="img-stack bottom" >
                     <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="true" className='img' />
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default AboutContent