import {ScrollContainer, ScrollPage, Animator, batch, Fade, Move, Sticky, MoveOut,MoveIn} from 'react-scroll-motion'
import './index.css';
import AnimatedText from "./AnimatedTextsingle";
import AnimatedTexts from "./AnimatedTextsinglelong";
import {motion, useScroll, useSpring} from 'framer-motion'
import React from 'react';
import Dropd from './components/dropd/Dropd.jsx'

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
    </div>
  )
}

export default App
