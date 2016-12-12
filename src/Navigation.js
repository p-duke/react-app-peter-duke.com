import React, {Component} from 'react';
import {
  Grid,
  Navbar,
  NavItem,
  Nav
} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return(
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                      <i className="fa fa-bars"></i>
                  </button>
              </div>

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                  <ul className="nav navbar-nav">
                      {/* <!-- Hidden li included to remove active className from about link when scrolled up past about section --> */}
                      <li className="hidden">
                          <a href="#page-top"></a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#about">About</a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#portfolio">Projects</a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#experience">Experience</a>
                      </li>
                  </ul>
              </div>
              {/* <!-- /.navbar-collapse --> */}
          </div>
          {/* <!-- /.container --> */}
      </nav>
    );
  }
}

export default Navigation;
