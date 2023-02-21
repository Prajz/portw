import './Dropd.css'
import React, {useRef, useState} from "react";
import linkt from '../../assets/linkedin.png'
import githu from '../../assets/github.png'

const Dropd = () => {

    const navbarRef = useRef(null);
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [box_class, setBoxClass] = useState("box hidden")

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
            setBoxClass("box visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
            setBoxClass("box hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <nav ref={navbarRef} className='navbar'>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            <div className={menu_class}> 
            <div className={box_class}>
                        <a className="btn" href='https://linkedin.com/in/devpraj' target='_blank' rel='noreferrer'>
                            <img src={linkt} alt='linkedin' className='spaniL'></img></a></div>
                <div
                    className={box_class}>
                        <a className="btn" href='https://github.com/Prajz' target='_blank' rel='noreferrer'>
                            <img src={githu} alt='github' className='spaniG'></img></a></div>
            </div>
        </nav>
    )
}
export default Dropd