import React from 'react'
import logo from '../Images/logo.png'
import "../Stylings/Home.css"
//imports for icons 
import {FaGithubSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import { ReactComponent as Resume } from "../assets/resume.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";

// imports anf init for scrolling animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

                
const Home = () => {
    
    return (
        <div id="home" >
            <img src={logo} height="570px" width="650px" className="logo homeLogo" data-aos="fade-left"/>
            <div className="info" data-aos="fade-right">
            <h1>ANAS NAHIL</h1>
            <p className='opener'>A Fullstack Software Engineer passionate about making Apps that help people and building games. </p>
            <div className='icons'>
            <a href="https://docs.google.com/document/d/1OkkZ5Rn8xxP_xB-xzZlfjx2Umun5xLAiJQxFd0yDIpo/edit?usp=sharing" target="_blank"><button class="glow-on-hover"> <Resume /> </button></a>
            <a href="https://www.linkedin.com/in/itsanasna/" target="_blank"><button class="glow-on-hover "><LinkedIn /></button></a>
            <a href="https://github.com/itsanasna/" target="_blank"><button class="glow-on-hover"><Github/></button></a>
            </div>
            </div>
        </div>
    )
}

export default Home

