/*jslint node: true, esversion:6 */
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, InputGroup, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './TopNavbar.css';


class TopNavbar extends Component {
	constructor(props) {
		super(props);
	}
	handleRoute(route) {
		
	}

	
						

	render() {
		return (
			<Navbar collapseOnSelect staticTop>
				<Navbar.Collapse>
					<Navbar.Header>
						<Navbar.Brand>
							<p>Navigation</p>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Nav onSelect={(key) => {this.props.selectNavView(key)}}>
						<LinkContainer to="/datagen"><NavItem eventKey={1}>EICU</NavItem></LinkContainer>
						
					</Nav>
					
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default TopNavbar;