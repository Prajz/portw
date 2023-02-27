import React from 'react'
import './About.css'
import {motion} from 'framer-motion'
import AnimatedText from '../../AnimatedText'
import AnimatedTexts from '../../AnimatedTextsingle'
import DevPrajaCV from '../../../assets/DevPrajaCV.pdf'
const About = () => {


  const placeholderTextm = [
    {
      type: "heading5",
      text: "I am currently a second year student studying towards a BSc in Computer Science. Below I have outlined some notable projects that I have created and taken part in with explanations provided. I will soon add a blog with some interesting concepts I come across in my upcoming projects."
    }
  ];

  const cvdown = [
    {
      type: "heading5",
      text: "Download my CV here."
    }
  ]

const container = {
    visible: {
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  return (
    <section id='about'>
    <motion.div className='wholeabout'
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 1}}
    variants={container}>
        <motion.div className='bongt'>{placeholderTextm.map((item, index) => {
                      return <AnimatedText {...item} key={index} />;
                    })}
                    <a href={DevPrajaCV} className="btnd">
                    <motion.div>
                      {cvdown.map((item, index) =>{
                        return <AnimatedTexts {...item} key={index} />;
                      })}</motion.div>
                      </a>
        </motion.div>
    </motion.div>
    </section>
  )
}

export default About