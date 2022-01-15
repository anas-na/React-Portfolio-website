import React from 'react'
import logo from '../Images/logo.png'
import "../Stylings/Home.css"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
    return (
        <div id="home" >
            <img src={logo} height="570px" width="650px" className="logo" data-aos="fade-left"/>
            <div className="info" data-aos="fade-right">
            <h1>ANAS NAHIL</h1>
            <p>A Fullstack Software Engineer passionate about making Apps that help people and building games. </p>
            <a href="https://docs.google.com/document/d/1OkkZ5Rn8xxP_xB-xzZlfjx2Umun5xLAiJQxFd0yDIpo/edit?usp=sharing" target="_blank"><button class="btn btn-lg btn-outline-secondary">Resume</button></a>
            <a href="https://www.linkedin.com/in/itsanasna/" target="_blank"><button class="btn btn-lg btn-outline-secondary">LinkedIn</button></a>
            <a href="https://github.com/itsanasna/" target="_blank"><button class="btn btn-lg btn-outline-secondary">Github</button></a>
            </div>
        </div>
    )
}

export default Home

