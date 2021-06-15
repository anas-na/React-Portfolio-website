import React from 'react'
import { button } from 'react-bootstrap'
import Background from '../Images/background.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className="title text-center">Welcome</h1>
            <img src={Background} alt='Home Background' />
            <button type="button" class="btn btn-outline-dark ">Click To Enter</button>
        </div>
    )
}

export default Home

