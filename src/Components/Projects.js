import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SnowmanGame from "../Images/SnowmanGame.gif";
import textadventure from "../Images/textadventure.gif";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
        <Carousel
          fade
          interval={null}
          className="carousel col-md-10 col-sm-12"
          data-bs-touch="false"
        >
          <Carousel.Item>
            <div class="d-flex justify-content-center ">
              <img
                className="d-block w-90"
                src={SnowmanGame}
                alt="First slide"
              />
          </div>
  
            <Carousel.Caption className="col-sm-4 col-md-12">
              <h3 class="text-danger">Snowman</h3>
              <p>
                {" "}
                As the player in The Snowman Game, you get presented a masked
                word that you have to guess in less than 7 tries.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div class="d-flex justify-content-center">
              <img
                className="d-block w-70"
                src={textadventure}
                alt="Second slide"
              />
            </div>
            <Carousel.Caption>
              <h3>The HyruleText Adventure</h3>
              <p>
              In The Hyrule Adventure Game -inspired by the popular game: The
              Legend Of Zelda-, you play as the hero Link saving Princess
              Zelda. by entering text or numbers to answer simple questions,
              you're able to navigate through The Hyrule Castle to find Zelda.
              Choose wisely to succesfully save the princess.
              </p>
              <button class=' text-center' >Check out the code.</button>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div class="d-flex justify-content-center">
              <img
                className="d-block w-90"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default Projects;
