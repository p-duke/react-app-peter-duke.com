import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Navigation from './Navigation';
import navigationSpy from '../utils/navigationSpy';

import {
  Grid,
  Navbar,
  Jumbotron,
  Button,
  NavItem,
  Nav,
  NavDropdown,
  MenuItem,
  Image,
  Row,
  Carousel,
  Media,
  Thumbnail
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Jumbotron id="hero" className="vertical-center">
          <div id="hero-overlay"></div>
          <Grid className="text-center">
            <div id="hero-text" className="text-center">
              <h1 className="intro-text margin">Peter Duke</h1>
              <hr />
              <h2 className="intro-text skills margin">Software Developer</h2>
            </div>
          </Grid>
        </Jumbotron>
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
