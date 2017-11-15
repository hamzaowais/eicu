import React, { Component } from 'react';
import { Col, Grid } from 'react-bootstrap';
import './header.css';
import logo from '../img/logo4.png'
import TopNavbar from '../Views/TopNavbar';

class Header extends Component {
  render() {
    return (
      <header className="header-image">
        <Grid>
          <Col xs={12} md={3}>
          	<img height="70"  className="logo" alt="logo" src={logo} />
          </Col>
          <Col xs={12} md={9}>
          	<h2>
          	iEXPLORECC
  	        <span style={{fontSize:13}}>
  	        	<span className="yello"> I</span>NTELLEGENT 
  	        	<span className="yello"> EXPL</span>ORATION 
  	        	OF 
  	        	<span className="yello"> O</span>RGAN 
  	        	SYSTEM 
  	        	<span className="yello"> RE</span>SPONSES 
  	        	IN
  	        	<span className="yello"> C</span>RITICAL 
  	        	<span className="yello"> C</span>ARE
          	</span>
          	</h2>
          </Col>
        </Grid>
      </header>
    );
  }
}

export default Header;
