import './FormStyles.css'

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" name='name'/>
            <label htmlFor="email">Email</label>
            <input type="email" name='email'/>
            <label htmlFor="subject">Subject</label>
            <input type="text" name='subject' />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" rows="6" placeholder='Type your message here' ></textarea>
            <button type='submit' className="btn">Submit</button>

        </form>
    </div>
  )
}

export default Form