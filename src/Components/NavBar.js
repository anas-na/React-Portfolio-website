import React from "react";
import { Link } from "react-scroll";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Logo from "../Images/logo.png";

const NavBar = () => {
  return (
    <div>
      <MDBNavbar fixed="top" expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/home'>
            <img src={Logo} height='40' width='40' alt='' loading='lazy' />
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ></Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='/aboutMe'>
                  <Link
                    activeClass='active'
                    to='aboutMe'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Projects'>
                  <Link
                    activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Projects
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Resume'>
                  <Link
                    activeClass='active'
                    to='resume'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Resume
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/contact'>
                  <Link
                    activeClass='active'
                    to='contactMe'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    contact
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default NavBar;
