import React from "react";
import logo from "../Images/logo.png";
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
const AboutMe = () => {
  return (
    <div>
      <MDBCard alignment='center'
            className='h-100 border border-dark'
            style={{ backgroundColor: "rgb(66, 66, 66)" }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={logo} alt='selfpic' id='selfie' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody className='d-flex flex-column justify-content-center'>
              <MDBCardTitle>About:</MDBCardTitle>
              <MDBCardText className="text-center">
                Born and raised in Morocco, I moved to NYC in 2010 and been
                living in the big apple ever since. with a passion for music, I
                started learning about coding in middle school with having my
                own blog where i posted all music news that interest me. but now
                i chose to imerse myself more into programing and be
                orofessional at it. I love being able to expand my horizons and
                see what's possible. My curiosity and drive for perfection means
                that I excel at solving technical challenges and debugging
                individual lines of code. Ultimately, I hope to use my technical
                skills to design and program my own video games, and to build
                platforms that enable community building and social impact.
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
};

export default AboutMe;

