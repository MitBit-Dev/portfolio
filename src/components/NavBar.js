import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const NavBar = ()=>{
	return(
		<Navbar bg="dark" variant="dark">
		    <Navbar.Brand href="#home">
		      React Bootstrap
		    </Navbar.Brand>
		</Navbar>
	)
}

export default NavBar;