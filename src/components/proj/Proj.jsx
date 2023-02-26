import React from 'react'
import './Proj.css'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//import SmartG1 from '../../assets/SG1.jpeg'
//import fidi1 from '../../assets/whitecampus1.jpeg'
//import iSpendifyNTB1 from '../../assets/iSpendi131.jpeg'
//import worki1 from '../../assets/workifyprod1.jpeg'

const Proj =() => {

    const titlAnim ={
        offscreen:{x:-300, opacity:0.1},
        onscreen:{x:0, opacity: 1,
        transition: {
        type:"spring",
        bounce: 0.4,
        duration: 3,
        }},
    }

    const heAnim ={
        offscreen:{y:400, opacity:0},
        onscreen:{y:0, opacity:1,
        transition:{
            duration: 1.2,
            type:"spring",
            bounce:0.4
        }}
    }

    return(
        <section id='projects'>
    <div className='fil'>
        <motion.h3
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={titlAnim}> My recent projects </motion.h3>
        <motion.div className='gri'
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true}}
        variants={heAnim}
        transition={{staggerChildren:0.5}}>
            <div className='tl' >
                <div className='b2'>
                    <LazyLoadImage className='cmc' src='./assets/whitecampus.png' alt="map" />
                    <motion.h1
                        variants={heAnim}>CampusMap</motion.h1>
                    <motion.p
variants={heAnim}>Ongoing group project in which are creating an Android application in Java using Google Maps API and OpenStreetMap allowing users to navigate through campus.
                    </motion.p>

                </div>
            </div>
            <div className='tr' >
                <div className='b1'>
                    <LazyLoadImage className= "sgc" src='./assets/SG.png' alt="Smart Garden" />
                    <motion.h1 
                        variants={heAnim}>SmartGarden</motion.h1>
                    <motion.p
variants={heAnim}>Using an Arduino UNO R3, created a self sustaining plant system which is able to change the surroundings in order to absorb light and water when required.
                    </motion.p>
                    <motion.div className='btmimgry'> <a target='_blank' rel='noreferrer' href='https://www.youtube.com/watch?v=JCjzglzV1n8z' className='btnproy'> Live demo </a></motion.div>
                    <motion.div className='btmimgrg'> <a target='_blank' rel='noreferrer' href="https://github.com/Prajz/SmartGarden" className='btnprog'> Github </a> </motion.div>
                </div>
            </div>
            <div className='bl' >
                <div className='b4'>
                     <LazyLoadImage src='./assets/iSpendi13.png' alt="iSpendifyapp" className='isc' />
                    <motion.h1 
                    variants={heAnim}>iSpendify</motion.h1>
                     <motion.p
variants={heAnim}>iOS application in the MVVM format created with SwiftUI which allows user to track their spenditure and coherently displays their recent transactions using SwiftUICharts API.
                    </motion.p>
                    <motion.div className='btmimgly' > <p className='btnprow'> Currently working on demo </p> </motion.div>
                    <motion.div className='btmimglg'><a target='_blank' rel='noreferrer' href="https://github.com/Prajz/iSpendify" className='btnprog'> Github </a> </motion.div>
                 </div>
            </div>
            <div className='br' >
                <div className='b3'>
                    <LazyLoadImage src='./assets/workifyprod.png' alt="workify" className='wkc' />
                     <motion.h1
                     variants={heAnim}> Workify </motion.h1>
                      <motion.p
variants={heAnim}> Web application developed with Flask in Python allowing users to link their Spotify and set goals to measure productivity while listening to different genres of music.
                    </motion.p>
                    <motion.div className='btmimgry'><a target='_blank' rel='noreferrer' href='https://youtu.be/9uWvWNr-Vvw' className='btnproy'> Live demo </a></motion.div>
                    <motion.div className='btmimgrg'><a target='_blank' rel='noreferrer' href="https://github.com/Prajz/workify" className='btnprog'> Github </a></motion.div>
                 </div>
            </div>
        </motion.div>
        <motion.p className='mobi'> Tap on each to see more</motion.p>
        <motion.h2 className='pc'> Click on each to see more</motion.h2>
    </div>
    </section>
    )
}

export default Proj


    /*
    for future setup of animatepresence
    const[isCamp, setIsCamp] = useState(false)
    const[isSmartG, setIsSmartG] = useState(false)
    const[isSpendify, setIsSpendify] = useState(false)
    const[isWorki, setIsWorki] = useState(false)
    const[camp_class, setCampClass] = useState("camp invisible")
    const[smartg_class, setSmartgClass] = useState("smartg invisible")
    const[spendi_class, setSpendiClass] = useState("spendi invisible")
    const[worki_class, setWorkiClass] = useState("worki invisible")
    // toggle shrunk

    const updateView = () => {
        if (isCamp){
            setIsSmartG(false)
            setIsSpendify(false)
            setIsWorki(false)
            setCampClass("camp main")
        }
        else{
            setCampClass("camp invisible")
        }
        if (isSmartG){
            setIsCamp(false)
            setIsSpendify(false)
            setIsWorki(false)
            setSmartgClass("smartg main")
        }
        else{
            setSmartgClass("camp invisible")
        }
        if (isSpendify){
            setIsCamp(false)
            setIsSmartG(false)
            setIsWorki(false)
            setSpendiClass("spendi main")
        }
        else{
            setSpendiClass("spendi invisible")
        }
        if (isWorki){
            setIsCamp(false)
            setIsSmartG(false)
            setIsSpendify(false)
            setWorkiClass("worki main")
        }else{
            setWorkiClass("worki invisible")
        }
    }

    */