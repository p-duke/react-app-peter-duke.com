import React, {Component} from 'react';
import {
  Image
} from 'react-bootstrap';


class About extends Component {
  render() {
    return (
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
              <p>
                I’m a software engineer who is passionate about building scalable solutions.
                I feel truly lucky that my hobby is also my career and enjoy embracing the occasional curious tangent.
                What I love about software development is the opportunity to build my imagination and reach millions of people.
              </p>
              <br />
              <button type="button" className="btn btn-info btn-lg">
                <a target="_blank" href="https://drive.google.com/file/d/1PP1BXLXTEcafasejZIobxxWNZOXRsIXs/view?usp=sharing"><span className="glyphicon glyphicon-save-file" aria-hidden="true"></span> Download Resume</a>
              </button>
            </div>
            <div className="col-md-4 text-center">
              <Image className="center-block" width={246} height={246} src='https://peter-duke-portfolio.s3.amazonaws.com/profile-pic.jpg' circle responsive />
            </div>
            <div className="col-md-4">
              <h3>Details</h3>
              <p>
                <strong><i className="glyphicon glyphicon-user" aria-hidden="true"></i> Name: </strong>
                <p>Peter Duke</p>
              </p>
              <p>
                <strong><i className="glyphicon glyphicon-home" aria-hidden="true"></i> Born: </strong>
                 <p>San Francisco, CA</p>
              </p>
              <p>
                <strong><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i> Location: </strong>
                 <p>Brooklyn, NY</p>
              </p>
              <p>
                <strong><i className="glyphicon glyphicon-briefcase" aria-hidden="true"></i> Skills: </strong>
              </p>
              <div className="row">
                <div className="col-lg-5">
                   <li>Javascript</li>
                   <li>PHP</li>
                   <li>Ruby</li>
                   <li>React.js / Redux</li>
                   <li>Ember.js</li>
                   <li>Backbone.js</li>
                   <li>Ruby on Rails</li>
                </div>
                <div className="col-lg-7">
                   <li>Node</li>
                   <li>CodeIgniter</li>
                   <li>VIM</li>
                   <li>TDD (Jest, Mocha, QUnit, Selenium, Rspec)</li>
                   <li>Git / Github</li>
                   <li>MySQL / PostgreSQL</li>
                   <li>HTML / CSS</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
