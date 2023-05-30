import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>100, Shivampuri Colony</p>
                        <p>Indore</p>
                    </div>
                </div>
                <div className="phone">
              <h4>  <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                +91 96690 24735 </h4>
                </div>
                <div className="email">
              <h4>  <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                dayaldhakad01@gmail.com </h4>
                <div className="social">
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </div>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Footer