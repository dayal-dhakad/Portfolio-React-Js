import './HeroImg2Styles.css'
import React from 'react'

const HeroImg2 = (props) => {
  return (
    <div className='hero-img'>
        <div className="heading">
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default HeroImg2