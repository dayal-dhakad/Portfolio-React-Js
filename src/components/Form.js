import './FormStyles.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

import React from 'react'

const Form = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ewwiep5', 'template_84ou1na', form.current, 'Gk5QScCMSAiIKy3Cg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
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