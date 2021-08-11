import React from "react";
import SnowmanGame from "../Images/SnowmanGame.gif";
import textadventure from "../Images/textadventure.gif";
import FauxTube from "../Images/FauxTube.jpg";
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
} from "mdb-react-ui-kit";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="prjectsPage">
      <MDBRow className="row-cols-1 row-cols-sm-2 row-cols-md-3 mt-3">
        <MDBCol>
          <MDBCard
            style={{ maxWidth: "22rem" }}
            alignment="center"
            className="h-100"
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={SnowmanGame} fluid alt="Snowman Project" />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Snowman Game:</MDBCardTitle>
              <MDBCardText>
                As the player in The Snowman Game, you get presented a masked
                word that you have to guess in less than 7 tries.
              </MDBCardText>
              <MDBBtn
                href="https://github.com/itsanasna/FSW-CLI-Snowman"
                target="_blank"
              >
                GitHub Code
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard
            style={{ maxWidth: "22rem" }}
            alignment="center"
            className="h-100"
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src={textadventure}
                fluid
                alt="Text Based Adventure"
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>The Hyrule Text Adventure</MDBCardTitle>
              <MDBCardText>
                In The Hyrule Adventure Game inspired by the popular game: The
                Legend Of Zelda, you play as the hero Link saving PrincessZelda.
                by entering text or numbers to answer simple questions,and
                navigate through the castle to find Zelda.
              </MDBCardText>
              <MDBBtn
                href="https://github.com/itsanasna/FSW-Text-Based-Adventure"
                target="_blank"
              >
                GitHub Code
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard
            style={{ maxWidth: "22rem" }}
            alignment="center"
            className="h-100"
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={FauxTube} fluid alt="..." />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>FauxTube:</MDBCardTitle>
              <MDBCardText>
                As the player in The Snowman Game, you get presented a masked
                word that you have to guess in less than 7 tries.
              </MDBCardText>
              <MDBBtn
                href="https://github.com/itsanasna/FSW-CLI-Snowman"
                target="_blank"
              >
                GitHub Code
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Projects;
