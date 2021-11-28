import React from 'react'
import logo from '../Images/logo.png'
import "../Stylings/Home.css"


const Home = () => {
    return (
        <div id="home" >
            <img src={logo} height="570px" width="650px" className="logo"/>
            <div className="info">
            <h1>ANAS NAHIL</h1>
            <p>A Fullstack Software Engineer passionate about making Apps that help people and building games. </p>
            </div>
        </div>
    )
}

export default Home

