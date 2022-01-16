import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FauxTube from "../Images/FauxTube.gif";
import reactCalc from "../Images/ReactCalc.gif";
import budgettingApp from "../Images/budgettingApp.gif";
import EcoRent from "../Images/EcoRent.gif";

class ProjectCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false} >
        <div>
          <img src={EcoRent} className="image"/>
          <p className='legend'>
            <h4 className='projectTitle'>EcoRent:</h4>
            <p>
            A web application that allows users to post items for rent, or rent items for when they need to use them.
              <br /> App Made by a team of 4 developers
            </p>
            <a href='https://ecorent.netlify.app' target='_blank'>
              <button class='btn btn-sm btn-outline-secondary'>Live</button>
            </a>
          </p>
        </div>
        <div>
          <img src={FauxTube} />
          <p className='legend'>
            <h4 className='projectTitle'>FauxTube:</h4>
            <p>
            A web application that makes a call to a Youtube API to render search results and videos on the app with the ability to leave comments.
              <br /> App Made by a team of 3 developers
            </p>
            <a href='https:fauxtube.netlify.app' target='_blank'>
              <button class='btn btn-sm btn-outline-secondary'>Live</button>
            </a>
          </p>
        </div>
        <div>
          <img src={budgettingApp} />
          <p className='legend'>
            <h4 className='projectTitle'>Budgetting App:</h4>
            <p>
              The Budgeting App helps you enter and save all transactions you
              make into one place and add them together to show you how much you
              are spending.
              <br />
              This App was created using React, Express, SQL, Bootstrap.
            </p>
            <a href='https://budgetting-app.netlify.app' target='_blank'>
              <button class='btn btn-sm btn-outline-secondary'>Live</button>
            </a>
          </p>
        </div>
        <div>
          <img src={reactCalc} />
          <p className='legend'>
            <h4 className='projectTitle'>React Calculator:</h4>
            <p>
              This web app is a clone of an iphone calculator using
              React.js
              <br />
              This App was created using React, Express, SQL, Bootstrap.
              <br />
            </p>
            <a
              href='https://anas-calculator-project.netlify.app'
              target='_blank'
            >
              <button class='btn btn-sm btn-outline-secondary'>Live</button>
            </a>
          </p>
        </div>
      </Carousel>
    );
  }
}

export default ProjectCarousel;
