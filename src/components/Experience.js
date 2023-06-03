import './Experience.css'
import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h2>My Skills</h2>
        <h5>What Skills I've</h5>
        
        <div className="container experience_container">
            <div className="experience_programming">
                <h3>Programming Languages</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsPatchCheckFill  className='experience_details-icons'/>
                        <div>
                        <h4>C</h4> 
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill  className='experience_details-icons'/>
                       <div>
                       <h4>C++</h4>
                        <small className="text-light">Experienced</small>
                       </div>
                    </article> 
                </div>

            </div>
            <div className="experience_web">
            <h3>Web Development</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsPatchCheckFill className='experience_details-icons'/>
                       <div>
                       <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                       </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className='experience_details-icons'/>
                       <div>
                       <h4>React Js</h4>
                        <small className="text-light">Beginner</small>
                       </div>
                    </article> 
                    <article className="experience_details">
                        <BsPatchCheckFill className='experience_details-icons'/>
                        <div>
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article> 
                    <article className="experience_details">
                        <BsPatchCheckFill className='experience_details-icons'/>
                        <div>
                        <h4>BootStrap</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article> 
                    <article className="experience_details">
                        <BsPatchCheckFill className='experience_details-icons'/>
                       <div>
                       <h4>JavaScript</h4>
                        <small className="text-light">Intermediate</small>
                       </div>
                    </article> 
                </div>
            </div>
            <div className="experience_other">
            <h3>Other Skills</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsPatchCheckFill className='experience_details-icons'/>
                       <div>
                       <h4>GIT</h4>
                        <small className="text-light">Experienced</small>
                       </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className='experience_details-icons'/>
                       <div>
                       <h4>MYSQL</h4>
                        <small className="text-light">Intermediate</small>
                       </div>
                    </article> 
                    
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience