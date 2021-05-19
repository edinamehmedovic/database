import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';


const NavbarTop = () => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Database</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><Link to="/movies">Filmovi</Link></Nav.Link>
                        <Nav.Link ><Link to="/movies2">Filmovi 2</Link></Nav.Link>
                        <Nav.Link><Link to="/books">Knjige</Link></Nav.Link>
                        <Nav.Link><Link to="/persons">Osobe</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
    </Navbar>
}

export default NavbarTop;