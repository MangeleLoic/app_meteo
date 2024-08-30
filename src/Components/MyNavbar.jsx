import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';

function MyNavbar() {
  const location = useLocation();  

  const [linkUrls] = useState([
    { path: '/', name: 'Home' },
    { path: '/previsioni', name: 'Previsioni' },
    { path: '/mappe', name: 'Mappe' },
    { path: '/servizi', name: 'Servizi' },
  ]);

  const addActiveClass = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Epic Meteo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {linkUrls.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={addActiveClass(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
