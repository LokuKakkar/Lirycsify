import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = (props) => {
  // {console.log(props.songname)}
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <header className={`header ${scrollPosition > 50 ? "fixed" : ""}`}> // Unconnect this to appy basic header
    // <header className={`header ${scrollPosition > 50 ? "fixed fade-in" : ""}`}> // Unconnect this to appy Fade In effect on header
    <header className={`header ${scrollPosition > 100 ? "fixed" : ""}`}>
      <Container>
        <Navbar expand="lg" >
          <Navbar.Brand href="#home" style={{opacity: 1}}>
            <img
              src={props.albumimg}
              alt="ALBUM COVER"
              className="logo"
              style={{
                position: "absolute",
                opacity: "1",
                // right: 0,
                top: 0,
                transform: scrollPosition > 50 ? "scale(0.75)" : "",
              }}
            />
          </Navbar.Brand>
          <Navbar id="basic-navbar-nav">
              
            <Nav className="me-auto">
              
              <Nav.Link href="/" style={{marginLeft : "40px" , color : "white" , opacity : "1"}}>   {props.songname} </Nav.Link>
              <Nav.Link href="/" style={{color : "white" , opacity : "1"}}>{props.albumname}  </Nav.Link>
              {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#categories/react">
                  React
                </NavDropdown.Item>
                <NavDropdown.Item href="#categories/angular">
                  Angular
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
