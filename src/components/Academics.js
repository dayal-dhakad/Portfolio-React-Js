import './AcademicsStyles.css'
import React from 'react'
import  { HiAcademicCap }  from 'react-icons/hi'


const Academics = () => {
  return (
    <div className="academics">
            <div className="academics_header">
                <h2>Academics</h2>
            </div>
            <div className="academics_container">
            <div className="box">
                <div className="sidebar">
                <div className="academics_icon">
                <HiAcademicCap/>
                </div>
                <div className="rectangle">
                
                </div>
                </div>
                <div className="academics_details">
                <div className="academics_name">
                    <h4>Institute of Engineering and Science, IPS Academy, Indore </h4> 
                  <strong><p>B.Tech (CSIT)</p></strong>  
                </div>
                <div className="academics_content">
                    <p>2020-2024</p>
                    <p> <strong>CGPA : 7.9 </strong> </p>
                </div>
                </div>
            </div>

            <div className="box">
            <div className="sidebar">
                <div className="academics_icon">
                <HiAcademicCap/>
                </div>
                <div className="rectangle">
               
                </div>
                </div>
                <div className="academics_details">
                <div className="academics_name">
                    <h4>Sanyogitaganj H.S School, Indore</h4>
                    <strong><p>Class: XII (Science)</p></strong>  
                    
                </div>
                <div className="academics_content">
                    <p>2019-2020</p>
                    <p> <strong>Percentage: 69</strong> </p>
                </div>
                </div>
            </div>

            <div className="box">
            <div className="sidebar">
                <div className="academics_icon">
                <HiAcademicCap/>
                </div>
                <div className="rectangle">
                
                </div>
                </div>
                <div className="academics_details">
                <div className="academics_name">
                    <h4>Shree Dalauda Public School, Dalauda</h4>
                    <strong><p>Class: X</p></strong>  
                    
                </div>
                
                <div className="academics_content">
                    <p>2017-2018</p>
                    <p> <strong>Percentage: 85.4</strong> </p>
                </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Academics