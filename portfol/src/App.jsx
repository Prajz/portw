import {ScrollContainer, ScrollPage, Animator, batch, Fade, Move, Sticky, MoveOut, MoveIn} from 'react-scroll-motion'
import './index.css';
import AnimatedText from "./AnimatedTextsingle";
import AnimatedTexts from "./AnimatedTextsinglelong";
import {motion, useScroll, useSpring} from 'framer-motion'
import React from 'react';
import Dropd from './components/dropd/Dropd.jsx'
import Header from './components/header/Header.jsx'
import About from './components/about/About.jsx'
function App() {
  const FadeUp = batch(Fade(), Move(), Sticky());
  const FadeUpn = batch(Fade(), Move());

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 60,
    restDelta: 0.00001
  });

  const scrollproj = [
    {
      type: "paragraph",
      text: "Scroll to see my projects"
    }
  ]
  const placeholderText = [
    {
      type: "paragraph",
      text: "Scroll down"
    }
  ];

const container = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const containerr = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className='aap'>
      <Dropd />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <ScrollContainer snap='proxmity'>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -250))}>
            <Header />
            <motion.div
                className="scrolld"
                initial="hidden"
                whileInView="visible"
                variants={container}>
                  <div className="bongte">
                    {placeholderText.map((item, index) => {
                      return <AnimatedText {...item} key={index} />;
                    })}
                  </div>
                </motion.div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
          <Animator className='aboum' 
          animation={MoveIn(-500, 0)}> <Animator animation={MoveOut(500,0)} ><h1>ABOUT ME</h1></Animator></Animator>
           <Animator animation={FadeUpn}>
            <About /> 
           </Animator>
          </Animator>
          <Animator><motion.div className='scrollpro'
          initial="hidden"
          whileInView="visible"
          variants={containerr}>
                      {scrollproj.map((item, index) =>{
                        return <AnimatedTexts {...item} key={index} />;
                      })}</motion.div>
                      </Animator>
        </ScrollPage>
        </ScrollContainer>
    </div>
  )
}

export default App
