import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './styles.module.css';

export const NavBar = () => {
    const [Link, NewLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 45) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    },[])
const onNewLink = (value) => {
    NewLink(value)
}

  return (
    <Navbar expand="lg" className={`${scrolled ? "scrolled" : ''} ${classes.root}`}>
      <Container>
        <Navbar.Brand href="#home">Ernest Jones</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={Link === "home" ? 'active navbar-link' : 'navbarLink'}onClick={() => onNewLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={Link === "skills" ? 'active navbar-link' : 'navbarLink'}onClick={() => onNewLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={Link === "projects" ? 'active navbar-link' : 'navbarLink'}onClick={() => onNewLink('projects')}>Projects</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Github
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
