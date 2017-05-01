import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Footer from './Footer';
import Navigation from './Navigation';
import NavigationSpy from './NavigationSpy';

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
        <Navigation/>

        {/* Header Section */}
        <Jumbotron id="hero" className="vertical-center">
          <div id="hero-overlay"></div>
          <Grid className="text-center">
          <div id="hero-text" className="text-center">
            <h1 className="intro-text margin">Peter Duke</h1>
            <hr />
            <h2 className="intro-text skills margin">Software Developer</h2>
          </div>
          {/*<a href="#about" className="btn btn-circle page-scroll header-button">
            <i className="fa fa-angle-double-down animated"></i>
          </a>*/}
          </Grid>
        </Jumbotron>
        <About />
        <Portfolio />
        <Experience />
        <Footer />

        <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
            <a className="btn btn-primary" href="#page-top">
                <i className="fa fa-chevron-up"></i>
            </a>
        </div>
      </div>
    );
  }
}

export default App;
