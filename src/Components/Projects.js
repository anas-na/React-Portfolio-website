import React from "react";
import SnowmanGame from "../Images/SnowmanGame.gif";
import textadventure from "../Images/textadventure.gif";
import FauxTube from "../Images/FauxTube.jpg";
import popUpShop from "../Images/popup2.png";
import budgettingApp from "../Images/budgettingApp.png";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol,
  MDBCardFooter,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import "./Projects.css";

const Projects = () => {
  return (
    <div className='projectsPage d-flex  flex-column justify-content-center' id="projects">
      <MDBRow className=' row-cols-1 row-cols-sm-2 row-cols-md-3 m-3'>
        <MDBCol>
          <MDBCard
            alignment='center'
            className='h-100 border border-dark'
            style={{ backgroundColor: "rgb(66, 66, 66)", maxWidth: "21rem" }}
          >
            <div style={{height: "500px"}}>
            <MDBRipple
              rippleColor='light'
              rippleTag='div'
              className='bg-image hover-overlay'
            >
              <MDBCardImage src={SnowmanGame} fluid alt='Snowman Project' />
              <a
                href='https://github.com/itsanasna/FSW-CLI-Snowman'
                target='_blank'
              >
                <div
                  className='mask'
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            </div>
            <MDBCardBody>
              <MDBCardTitle className='text-light'>Snowman Game:</MDBCardTitle>
              <MDBCardText className='text-light'>
                Inspired by a world famous game, as the player in The Snowman
                Game, you get presented a word converted into "*****" and the
                goal is to guess the word less than 7 tries or the snowman
                melts.
                <br /> Made by using Javascript
              </MDBCardText>
              <MDBCardFooter>
                <MDBBtn
                  color='BDBDBD'
                  className='text-primary'
                  className='text-primary'
                  href='https://github.com/itsanasna/FSW-CLI-Snowman'
                  target='_blank'
                >
                  GitHub Code
                </MDBBtn>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            style={{ backgroundColor: "rgb(66, 66, 66)", maxWidth: "21rem" }}
            alignment='center'
            className='h-100'
          >
            <MDBRipple
              rippleColor='light'
              rippleTag='div'
              className='bg-image hover-overlay'
            >
              <MDBCardImage
                src={textadventure}
                fluid
                alt='Text Based Adventure'
              />
              <a
                href='https://github.com/itsanasna/FSW-Text-Based-Adventure'
                target='_blank'
              >
                <div
                  className='mask'
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className='text-light'>
                The Hyrule Text Adventure
              </MDBCardTitle>
              <MDBCardText className='text-light'>
                In The Hyrule Adventure Game inspired by the popular game: The
                Legend Of Zelda, you play as the hero Link saving PrincessZelda.
                <br />
                This adventure game was made by using Javascript and Chalk.js
                for the colors.
              </MDBCardText>
              <MDBCardFooter>
                <MDBBtn
                  className='text-primary'
                  color='BDBDBD'
                  className='text-primary'
                  href='https://github.com/itsanasna/FSW-Text-Based-Adventure'
                  target='_blank'
                >
                  GitHub Code
                </MDBBtn>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            style={{ backgroundColor: "rgb(66, 66, 66)", maxWidth: "21rem" }}
            alignment='center'
            className='h-100'
          >
            <MDBRipple
              rippleColor='light'
              rippleTag='div'
              className='bg-image hover-overlay'
            >
              <MDBCardImage src={FauxTube} fluid alt='...' />
              <a href='https://fauxtube.netlify.app' target='_blank'>
                <div
                  className='mask'
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className='text-light'>FauxTube:</MDBCardTitle>
              <MDBCardText className='text-light'>
                A web application clone of Youtube made by using React.js,
                Bootstrap and API calls to show search results and play the
                video chosen in a new page with the ability to leave comments.
                <br /> App Made by a team of 3 developers
                <br /> Click Image or{" "}
                <a
                  className='link-dark'
                  href='https://fauxtube.netlify.app'
                  target='_blank'
                >
                  HERE
                </a>{" "}
                for live app
              </MDBCardText>
              <MDBCardFooter>
                <MDBBtn
                  color='BDBDBD'
                  className='text-primary'
                  className='text-primary'
                  href='https://github.com/itsanasna/FauxTube'
                  target='_blank'
                >
                  GitHub Code
                </MDBBtn>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* <MDBRow className=' row-cols-1 row-cols-sm-2 row-cols-md-3 m-3'> */}
        <MDBCol>
          <MDBCard
            alignment='center'
            className='h-100 border border-dark'
            style={{ backgroundColor: "rgb(66, 66, 66)", maxWidth: "21rem" }}
          >
            <MDBRipple
              rippleColor='light'
              rippleTag='div'
              className='bg-image hover-overlay'
            >
              <MDBCardImage
                src={popUpShop}
                fluid
                alt='Pop Up Shop App'
                style={{ maxWidth: "21rem", maxHeight: "200px" }}
              />
              <a href='http://pop-up-shop.netlify.app' target='_blank'>
                <div
                  className='mask'
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className='text-light'>Pop Up Shop:</MDBCardTitle>
              <MDBCardText className='text-light'>
                This app is an online PopUp shop where you can add any sneakers
                you would like to sell but also not limited to those, as you can
                add whatever items you would like to sell. <br />
                This App was created using React, Express, SQL, Bootstrap.
                <br /> Created by a team of 4 developers.
              </MDBCardText>
              <MDBCardFooter>
                <MDBBtnGroup>
                  <MDBBtn
                    color='BDBDBD'
                    className='text-primary'
                    href='https://github.com/itsanasna/Pop-up-Shop-Back-end'
                    target='_blank'
                  >
                    BackEnd Code
                  </MDBBtn>
                  <MDBBtn
                    color='BDBDBD'
                    className='text-primary'
                    href='https://github.com/mphall77/Pop-Up-Front-End'
                    target='_blank'
                  >
                    FrontEnd Code
                  </MDBBtn>
                </MDBBtnGroup>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            style={{ backgroundColor: "rgb(66, 66, 66)", maxWidth: "21rem" }}
            alignment='center'
            className='h-100'
          >
            <MDBRipple
              rippleColor='light'
              rippleTag='div'
              className='bg-image hover-overlay'
            >
              <MDBCardImage
                src={budgettingApp}
                fluid
                alt='Budgetting app'
                style={{ maxWidth: "21rem", maxHeight: "100px" }}
              />
              <a href='https://budgetting-app.netlify.app' target='_blank'>
                <div
                  className='mask'
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className='text-light'>Budgeting app</MDBCardTitle>
              <MDBCardText className='text-light'>
                The Budgeting App helps you enter and save all transactions you
                make into one place and add them together to show you how much
                you are spending. you can create new entries, delete older ones
                and also edit them.
                <br />
                This App was created using React, Express, SQL, Bootstrap.
              </MDBCardText>
              <MDBCardFooter>
                <MDBBtnGroup>
                  <MDBBtn
                    color='#BDBDBD'
                    className='text-primary'
                    href='https://github.com/itsanasna/budgeting-app-backend'
                    target='_blank'
                  >
                    BackEnd Code
                  </MDBBtn>
                  <MDBBtn
                    color='BDBDBD'
                    className='text-primary'
                    href='https://github.com/itsanasna/Budgeting-React-front-end'
                    target='_blank'
                  >
                    FrontEnd Code
                  </MDBBtn>
                </MDBBtnGroup>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      {/* </MDBRow> */}
    </div>
  );
};

export default Projects;

