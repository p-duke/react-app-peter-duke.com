import React, {Component} from 'react';
import {
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';


class Experience extends Component {
  render() {
    // let tooltip = <Tooltip id={this.props.id}>Click to find out more!</Tooltip>;

    return(
      <section className="bg-experience" id="experience">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2>Experience</h2>
                      <hr className="thick-line" />
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <h3><i className="fa fa-laptop"></i> Skills</h3>
                      <hr className="thin-line-primary"/>
                  </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-3 skills-section">
                  <ul>
                    <li>Ruby on Rails</li>
                    <li>Javascript (AJAX, jQuery)</li>
                    <li>React.js</li>
                    <li>TDD (RSpec, Jasmine)</li>
                    <li>HTML5/CSS3</li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3 skills-section">
                {/* <ul className="no-bullets">
                Ruby on Rails
                  <li>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star grey-star no-bullets "></i>
                  </li>
                  Javascript
                  <li>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets grey-star"></i>
                    <i className="fa fa-star grey-star no-bullets "></i>
                  </li>
                  React.js
                  <li>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets grey-star"></i>
                    <i className="fa fa-star grey-star no-bullets "></i>
                  </li>
                  TDD
                  <li>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets grey-star"></i>
                    <i className="fa fa-star grey-star no-bullets "></i>
                  </li>
                  HTML5
                  <li>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star grey-star no-bullets "></i>
                  </li>
                </ul> */}
                </div>
                <div className="clearfix visible-xs-block"></div>
                <div className="col-xs-6 col-sm-3 skills-section">
                  <ul>
                    <li>VIM</li>
                    <li>Git / Github</li>
                    <li>Heroku</li>
                    <li>PostgreSQL, SQLite3</li>
                    <li>OO Programming</li>
                    <li>Project Management</li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3 skills-section">
                {/* <ul className="no-bullets">
                Git
                  <li>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star grey-star no-bullets "></i>
                  </li>
                  Heroku
                  <li>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets grey-star"></i>
                    <i className="fa fa-star no-bullets grey-star"></i>
                    <i className="fa fa-star grey-star no-bullets "></i>
                  </li>
                  PostgreSQL
                  <li>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets grey-star"></i>
                    <i className="fa fa-star grey-star no-bullets "></i>
                  </li>
                  OOP
                  <li>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets grey-star"></i>
                    <i className="fa fa-star grey-star no-bullets "></i>
                  </li>
                  Project Management
                  <li>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star no-bullets gold-star"></i>
                    <i className="fa fa-star gold-star no-bullets "></i>
                  </li>
                </ul> */}
                </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <h3><i className="fa fa-pencil"></i> Work</h3>
                      <hr className="thin-line-primary"/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                    <h3>
                    <OverlayTrigger 
                      overlay={<Tooltip id={this.props.id}>Learn more about Groundwork!</Tooltip>} placement="top" 
                        delayShow={300} delayHide={150}>
                      <a target="_blank" href="https://buildgroundwork.com/">
                        <i className="fa fa-link font-a-link"></i> Groundwork Software | JAN 2017 - APR 2017</a>
                    </OverlayTrigger>
                    </h3>
                      <div>
                        <h4>Software Developer Apprentice</h4>
                        <ul>
                          <li>
                            <p>
                              Worked closely with senior developers and product manager to estimate, plan, and develop new production features
                            </p>
                          </li>
                          <li>
                            <p>
                              Constructed front end features using Backbone.js that exposed new views or updated models/collections
                            </p>
                          </li>
                          <li>
                            <p>
                              Backend Rails development included database migrations, background jobs, domain model development, creating and updating server resources
                            </p>
                          </li>
                          <li>
                            <p>
                              Debugged production level bugs across the application stack
                            </p>
                          </li>
                          <li>
                            <p>
                            Wrote test driven code on both the front and back end
                            </p>
                          </li>
                          <li>
                            <p>
                            Became proficient in VIM
                            </p>
                          </li>
                          <li>
                            <p>
                            Technologies: Rails, Backbone.js, jQuery, Rspec, Jasmine, Sidekiq, Git/Github, Rollbar, VIM
                            </p>
                          </li>
                        </ul>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                    <h3>
                    <OverlayTrigger 
                      overlay={<Tooltip id={this.props.id}>Learn more about Dev Bootcamp!</Tooltip>} placement="top" 
                        delayShow={300} delayHide={150}>
                      <a target="_blank" href="https://devbootcamp.com/">
                        <i className="fa fa-link font-a-link"></i> Dev Bootcamp | MAY 2016 - SEPT 2016</a>
                    </OverlayTrigger>
                    </h3>
                      <div>
                        <h4>Software Developer</h4>
                        <ul>
                          <li>
                            <p>
                              18-week immersive course learning full stack web development. Dedicated 70+ hours per week learning, building, and deploying Rails web applications. Completed several project-based applications in an agile driven team environment.
                            </p>
                          </li>
                        </ul>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                    <h3>
                    <OverlayTrigger overlay={<Tooltip id={this.props.id}>Learn more about New Relic!</Tooltip>} placement="top" delayShow={300} delayHide={150}>
                      <a target="_blank" href="https://newrelic.com/"><i className="fa fa-link font-a-link"></i> NEW RELIC INC | FEB 2014 - MAY 2016</a>
                    </OverlayTrigger>
                    </h3>
                      <div>
                        <h4>SENIOR PROGRAMS SPECIALIST | AUG 2015 - MAY 2016</h4>
                        <ul>
                          <li>
                            <p>
                            Developed a multi-channel marketing nurturing flow for SMB sized customers
                            </p>
                          </li>
                          <li>
                            <p>
                            Produced 1-2 webinars monthly, cross-functionally that contributed to over $110k in
                            attributed sales pipeline
                            </p>
                          </li>
                          <li>
                            <p>
                            Acted as internal consultant to other departments for producing, promoting, and live
                            distribution of webinars including post-webinar analysis, attendee and sales follow up
                            </p>
                          </li>
                          <li>
                            <p>
                            Worked cross-functionally to develop targeting and nurturing strategies with
                            customers, partners, sales and marketing teams in order to accelerate sales pipeline
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4>MARKETING PROGRAMS SPECIALIST | FEB 2014 - AUG 2015 </h4>
                        <ul>
                          <li>
                            <p>
                            Queried business data using PostgreSQL, NRQL ( New Relic Query Language), and R scripts
                            </p>
                          </li>
                          <li>
                            <p>
                            Managed all LinkedIn advertising and created a total of 1100+ marketing qualified
                            leads with text ads, spotlight ads, and sponsored updates over the period of 3 quarters
                            </p>
                          </li>
                          <li>
                            <p>
                            Extended further education by receiving a certification from Learning Tree in Visual
                            Basic programming for Excel in order to streamline analysis, and reduce report runtime
                            </p>
                          </li>
                        </ul>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <h3>
                      <OverlayTrigger overlay={<Tooltip id={this.props.id}>Learn more about Bleu!</Tooltip>} placement="top" delayShow={300} delayHide={150}>
                        <a target="_blank" href="http://bleumarketing.com/"><i className="fa fa-link font-a-link"></i> BLEU MARKETING SOLUTIONS | MAY 2012 - FEB 2014</a>
                      </OverlayTrigger>
                      </h3>
                      <div>
                        <h4>MEDIA SPECIALIST | JAN 2013 - FEB 2014</h4>
                        <ul>
                          <li>
                            <p>
                            Implemented media planning and buying for both Technology and Healthcare verticals in domestic and international regions
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4>PAID SEARCH SPECIALIST | JUN 2012 - JAN 2013</h4>
                        <ul>
                          <li>
                            <p>
                            Managed over $30,000/month Adwords budget for both awareness and lead generation campaigns
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4>ACCOUNT COORDINATOR | MAY 2012 - JAN 2013</h4>
                        <ul>
                          <li>
                            <p>
                            Assisted Account Directors in campaign planning, logistics, pitch presentations and market analysis related to digital, print, out-of-home and thought leadership events.
                            </p>
                          </li>
                        </ul>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <h3><i className="glyphicon glyphicon-education" aria-hidden="true"></i> Education</h3>
                      <hr className="thin-line-primary"/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <h3>DEV BOOTCAMP | MAY 2016 - SEP 2016</h3>
                      <div>
                        <h4>FULL STACK DEVELOPMENT | JAN 2013 - FEB 2014</h4>
                      </div>
                  </div>
                      <div className="col-lg-12">
                          <h3>SAN FRANCISCO STATE UNIVERSITY | 2012</h3>
                          <div>
                            <h4>BACHELOR OF SCIENCE, BUSINESS ADMINISTRATION</h4>
                          </div>
                      </div>
                  </div>
          </div>
      </section>
    );
  }
}

export default Experience;
