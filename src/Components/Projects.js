import React from "react";
import FauxTube from "../Images/FauxTube.gif";
import reactCalc from "../Images/ReactCalc.gif";
import budgettingApp from "../Images/budgettingApp.gif";
import EcoRent from "../Images/EcoRent.gif";
import "../Stylings/Projects.css";

const Projects = () => {
  return (
    <div id='projects'>
      <div className='container'>
        <img src={EcoRent} alt='EcoRentProject' className='image' />
          <div className="projectDescrip">
            <h4 className="projectTitle">EcoRent:</h4>
            <p>
              EcoRent is designed to let you rent items instead of buying them
              new. Not only do you save money by not buying a product you'll
              need short-term, but it also allows you to enjoy these products
              without having to worry about storage.
              <br /> App Made by a team of 4 developers
            </p>
            <button href='https://ecorent.netlify.app' target='_blank'>
              Live
            </button>
          </div>
      </div>
      <div className='container'>
        <div className="projectDescrip">
        <h4 className="projectTitle">FauxTube:</h4>
            <p>
              A web application clone of Youtube made by using React.js,
              Bootstrap and API calls to show search results and play the video
              chosen in a new page with the ability to leave comments.
              <br /> App Made by a team of 3 developers
            </p>
            <button href='https://fauxtube.netlify.app' target='_blank'>
              Live
            </button>
        </div>
        <img src={FauxTube} alt='Example' className='image' />

      </div>
      <div className='container'>
        <img src={budgettingApp} alt='Example' className='image' />
        <div className="projectDescrip">
        <h4 className="projectTitle">Budgetting App:</h4>
            <p>
              The Budgeting App helps you enter and save all transactions you
              make into one place and add them together to show you how much you
              are spending. you can create new entries, delete older ones and
              also edit them.
              <br />
              This App was created using React, Express, SQL, Bootstrap.
            </p>
            <button href='https://budgetting-app.netlify.app' target='_blank'>
              Live
            </button>
        </div>
      </div>
      <div className='container'>
        <div className="projectDescrip">
        <h4 className="projectTitle">React Calculator:</h4>
            <p>
              This app is an online PopUp shop where you can add any sneakers
              you would like to sell but also not limited to those, as you can
              add whatever items you would like to sell. <br />
              This App was created using React, Express, SQL, Bootstrap.
              <br /> Created by a team of 4 developers.
            </p>
            <button href='https://pop-up-shop.netlify.app' target='_blank'>
              Live
            </button>
        </div>
        <img src={reactCalc} alt='Example' className='image' />
      </div>
    </div>
  );
};

export default Projects;
