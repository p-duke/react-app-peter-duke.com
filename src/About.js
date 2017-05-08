import React, {Component} from 'react';
import {
  Image
} from 'react-bootstrap';


class About extends Component {
  render() {
    return(
      <section className="bg-about" id="about">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2>About</h2>
                      <hr className="star-grey" />
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4">
                      <h3>About me</h3>
                      <p>A former marketer turned full stack developer after working in the tech industry for four years. Took the leap into web development after pursuing programming for the past two years and never grew tired of learning a new concept or language. Now looking to have a greater impact by building software that enriches people's quality of life.</p>
                      <br/>
                      <button type="button" className="btn btn-info btn-lg">
                        <a target="_blank" href="https://drive.google.com/open?id=0B43Ydmpo69cbSlc5eVBkaHptVG8"><span className="glyphicon glyphicon-save-file" aria-hidden="true"></span> Download Resume</a>
                      </button>
                  </div>
                  <div className="col-md-4 text-center">
                      <Image className="center-block" width={246} height={246} src={require("../images/headshot.jpg")} circle responsive />
                      {/* <img className="img-responsive img-circle" src={require("../images/headshot.jpg")} alt="My headshot"/> */}
                  </div>
                  <div className="col-md-4">
                      <h3>Details</h3>
                      <p>
                        <strong>Name:</strong>
                        <br/>
                        <i className="glyphicon glyphicon-user" aria-hidden="true"></i> Peter Duke
                        <br/>
                        <br/>
                        <strong>Born:</strong>
                        <br/>
                        <i className="glyphicon glyphicon-home" aria-hidden="true"></i> San Francisco, CA
                        <br/>
                        <br/>
                        <strong>Location:</strong>
                        <br/>
                        <i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i> Brooklyn, NY
                        <br/>
                        <br/>
                        </p>
                        {/* <strong>Interests:</strong>
                        <br/>
                        <ul className="no-bullets">
                          <li><i className="fa fa-pencil-square-o"></i> Design</li>

                          <li><i className="glyphicon glyphicon-book" aria-hidden="true"></i> Reading</li>

                          <li><i className="fa fa-coffee"></i> Coffee</li>

                          <li><i className="glyphicon glyphicon-cutlery" aria-hidden="true"></i>  Cooking
                          </li>

                          <li><i className="glyphicon glyphicon-road" aria-hidden="true"></i>  Adventures</li>
                        </ul> */}

                  </div>
              </div>
          </div>
      </section>
    );
  }
}

export default About;
