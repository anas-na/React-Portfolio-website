import React from "react";
import selfImage from "../Images/selfImage.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Stylings/About.css"

AOS.init();
const AboutMe = () => {
  return (
    <div id="aboutMe">
      <img className="selfImage"src={selfImage} height="600px" width="600px" data-aos="fade-right" />
      <div className="bio" data-aos="fade-left" >
        <h1>About Me</h1>
        <p>Born and raised in Morocco, I moved to NYC in 2010 and been
                living in the big apple ever since. with a passion for music, I
                started learning about coding in middle school with having my
                own blog where i posted all music news that interest me. but now
                i chose to imerse myself more into programing and be
                orofessional at it. I love being able to expand my horizons and
                see what's possible. My curiosity and drive for perfection means
                that I excel at solving technical challenges and debugging
                individual lines of code. Ultimately, I hope to use my technical
                skills to design and program my own video games, and to build
                platforms that enable community building and social impact.</p>
      </div>
    </div>
  );
};

export default AboutMe;

