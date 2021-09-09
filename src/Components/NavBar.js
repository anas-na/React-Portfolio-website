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
      
        {/* <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
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
        <Link
          activeClass='active'
          to='contactMe'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          ContactMe
        </Link> */}
{/* 
<MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'><img
              src={Logo}
              height='40'
              width='40'
              alt=''
              loading='lazy'
            /><Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
          </Link></MDBNavbarBrand>
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
              <MDBNavbarLink aria-current='page' href='/aboutMe'><Link
          activeClass='active'
          to='aboutMe'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
                About
        </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Projects'><Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        Projects</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Resume'><Link
          activeClass='active'
          to='resume'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Resume
        Resume</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact'><Link
          activeClass='active'
          to='contactMe'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          ContactMe
        contact</Link></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar> */}





      <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'><img
              src={Logo}
              height='40'
              width='40'
              alt=''
              loading='lazy'
            /></MDBNavbarBrand>
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
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Projects'>Projects</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Resume'>Resume</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact'>contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
};

export default NavBar;
