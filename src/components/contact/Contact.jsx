import './cont.css'
import React, {useRef, useState} from 'react'
import {motion} from 'framer-motion'
import emailjs from 'emailjs-com'
import AnimatedText from '../../AnimatedTextsingle'

const Cont = () => {

    const form = useRef()
    const[success_class,setSuccessClass] = useState("success hidden")
  
    const thanks = [
      {
        type: "heading3",
        text: "Thanks for your message!"
      }
    ]
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jf9495c', 'template_8bl84k8', form.current, '33IWLkT7EHeZwlKmQ')
        .then((result) => {
            console.log(result.text);
            setSuccessClass("success visible")
        }, (error) => {
            console.log(error.text);
        });
      
        e.target.reset();
    };
    
    const container = {
      visible: {
        transition: {
          staggerChildren: 0.08
        }
      }
    };
  

    return(
        <section id='contact'>
                <div className='conty'>
        <h2>
            Any questions?
        </h2>
        <h5> Get in touch via this form or at my <a href='https://www.linkedin.com/in/devpraj'> Linkedin </a> </h5>
        <form className='contf' ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your name' required/>
        <input type='email' name='email' placeholder='Your email address' required/>
        <textarea name='message' rows='8'placeholder='Your message' required></textarea>
        <motion.div
        className='sendb'
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.85 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <button type='submit' className='sendbb'>Send message</button></motion.div>
            </form>
            <div className={success_class}>
            <motion.div className='tanku'
          initial="hidden"
          whileInView="visible"
          variants={container}>
                      {thanks.map((item, index) =>{
                        return <AnimatedText {...item} key={index} />;
                      })}</motion.div>
            </div>
    </div>
        </section>
    )

}

export default Cont