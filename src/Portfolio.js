import React, {Component} from 'react';
import {
  Carousel,
  Media,
  Modal,
  Button,
  OverlayTrigger,
  Popover
} from 'react-bootstrap';


class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      devconnect: false,
      arcadeGame: false,
      pg: false,
      bingeWatch: false,
      index: 0,
      direction: null,
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  close(state) {
    this.setState({ [state]: false });
  }

  open(state) {
    this.setState({ [state]: true });
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const popover = (
      <Popover id="modal-popover">
        Click to see more!
      </Popover>
      );

    const popoverBingeWatch = (
      <Popover id="binge-watch-modal-popover">
        Click to see more!
      </Popover>
      );

    const popoverArcade = (
      <Popover id="arcade-modal-popover">
        Click to play!
      </Popover>
      );

    const popoverPolicyGenius = (
      <Popover id="pg-modal-popover">
        Click to watch!
      </Popover>
      );

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        Click to demo the app!
      </Popover>
    );

    return(
      <section className="bg-portfolio" id="projects">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2>Projects</h2>
                      <hr className="thick-line" />
                  </div>
              </div>

              {/* Version 1 with Centered block */}
              {/* <div className="row">
                  <div className="col-md-offset-3 portfolio-item">
                      <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                          <div className="caption">
                              <div className="caption-content">
                                  <i className="fa fa-search-plus fa-3x"></i>
                              </div>
                          </div>
                          <img src={require('../images/mentor_search.png')} className="img-responsive" alt="" />
                      </a>
                  </div>
              </div> */}

                {/* PolicyGenius Project Section */}
                <div className="row">
                <Media className="col-md-4">
                    <Media.Left align="middle">
                      <div className="portfolio-item">
                      <OverlayTrigger placement="bottom" overlay={popoverPolicyGenius}>
                         <a onClick={() => this.open('pg')} ref='pg' href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                             <div className="caption">
                                 <div className="caption-content">
                                     <i className="fa fa-search-plus fa-3x"></i>
                                 </div>
                             </div>
                             <img className="img-responsive" src={require('../images/pg-experience.png')} alt=""/>
                         </a>
                         </OverlayTrigger>
                      </div>
                    </Media.Left>
                </Media>
                <Media>
                  <div>
                  <Media className="col-lg-12">
                    <Media.Body>
                      <Media.Heading style={{textDecoration: 'underline' }}>
                        <bold>PolicyGenius.com CMS Project</bold>
                      </Media.Heading>
                      <p>
                        The PolicyGenius content marketing team produces many product and blog articles each week.
                        Traditionally the team was managing the publishing of those articles through a Wordpress platform.
                      </p>
                      <p>
                        The goal of this project was to create a new publishing platform that would transition existing Wordpress content while also giving them the ease of publishing new content.
                      </p>
                      <p>
                        <a onClick={() => this.open('pg')}>Click</a> to watch a brief video of some of the work!
                      </p>
                      <br/>
                    </Media.Body>
                  </Media>
                  </div>
                </Media>
                </div>

                {/* Version 2 with Media object on left side */}
                {/* DevConnect Project Section*/}
                <div className="row">
                <Media className="col-md-4">
                    <Media.Left align="middle">
                      <div className="portfolio-item">
                      <OverlayTrigger placement="bottom" overlay={popover}>
                         <a onClick={() => this.open('devconnect')} ref='devconnect' id="devconnect" className="portfolio-link" data-toggle="modal">
                           <div className="caption">
                               <div className="caption-content">
                                   <i className="fa fa-search-plus fa-3x"></i>
                               </div>
                           </div>
                           <img className="img-responsive" src={require('../images/mentor_search.png')} alt=""/>
                         </a>
                         </OverlayTrigger>
                      </div>
                    </Media.Left>
                </Media>
                <Media>
                  <div>
                  <Media className="col-lg-12">
                    <Media.Body>
                      <Media.Heading style={{textDecoration: 'underline' }}>
                        <bold>Devconnect</bold>
                      </Media.Heading>
                      <p>Selected as team lead for Devconnect, a hub for Dev Bootcamp graduates to connect and flourish in its thriving community plus extending the culture of learning through mentoring. The application was built with Ruby on Rails, React.js, HTML5, and Bootstrap CSS.</p>
                      <br/>
                      <p>Website:
                        <OverlayTrigger trigger={['hover','focus']} placement="bottom" overlay={popoverHoverFocus}>
                        <a target="_blank" href="https://devconnect-portal.herokuapp.com"> devconnect-portal.herokuapp.com</a>
                        </OverlayTrigger>
                      </p>
                    </Media.Body>
                  </Media>
                  </div>
                </Media>
                </div>

                {/* BingeWatch Project Section*/}
                <div className="row">
                <Media className="col-md-4">
                    <Media.Left align="middle">
                      <div className="portfolio-item">
                      <OverlayTrigger placement="bottom" overlay={popoverBingeWatch}>
                         <a onClick={() => this.open('bingeWatch')} ref='bingeWatch' id="bingeWatch" className="portfolio-link" data-toggle="modal">
                           <div className="caption">
                               <div className="caption-content">
                                 <i className="fa fa-search-plus fa-3x"></i>
                               </div>
                           </div>
                           <img className="img-responsive" src={require('../images/bingewatch.png')} alt=""/>
                         </a>
                         </OverlayTrigger>
                      </div>
                    </Media.Left>
                </Media>
                <Media>
                  <div>
                  <Media className="col-lg-12">
                    <Media.Body>
                      <Media.Heading style={{textDecoration: 'underline' }}>
                        <bold>BingeWatch</bold>
                      </Media.Heading>
                      <p>
                        The best first place to find all your favorite movies and build your personal collection!
                        This application allows users to search for movies using the premiere source for movie metadata, TMDb (The Movie Database).
                        Sign up, find a movie you've always wanted to see, or one of your favorites and add it to your collection. 
                      </p>
                      <br/>
                      <p>Website:
                        <OverlayTrigger trigger={['hover','focus']} placement="bottom" overlay={popoverBingeWatch}>
                          <a target="_blank" href="https://binge-watch.herokuapp.com"> https://binge-watch.herokuapp.com</a>
                        </OverlayTrigger>
                      </p>
                    </Media.Body>
                  </Media>
                  </div>
                </Media>
                </div>

                {/* Space Quest Project Section */}
                <div className="row">
                <Media className="col-md-4">
                    <Media.Left align="middle">
                      <div className="portfolio-item">
                      <OverlayTrigger placement="bottom" overlay={popoverArcade}>
                         <a onClick={() => this.open('arcadeGame')} ref='arcadeGame' href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                             <div className="caption">
                                 <div className="caption-content">
                                     <i className="fa fa-search-plus fa-3x"></i>
                                 </div>
                             </div>
                             <img className="img-responsive" src={require('../images/space-quest-game.png')} alt=""/>
                         </a>
                         </OverlayTrigger>
                      </div>
                    </Media.Left>
                </Media>
                <Media>
                  <div>
                  <Media className="col-lg-12">
                    <Media.Body>
                      <Media.Heading style={{ textDecoration: 'underline' }}>
                        <bold>Space Quest Arcade Game</bold>
                      </Media.Heading>
                      <p>A retro style arcade game built with HTML5 canvas and plain Javascript. The goal of this project was to build my foundation in plain Javascript, a better understanding of game development with HTML5 canvas, and learn about some important game development design patterns.</p>
                      <p>WARNING! This game has authentic and cheesy arcade style audio. If you want audio muted be sure to mute on your computer before playing. Enjoy!</p>
                      <br/>
                    </Media.Body>
                  </Media>
                  </div>
                </Media>
                </div>


                {/* Version 3 with Carousel */}
                {/* <div className="row">
                  <div className="container-fluid">
                    <Carousel>
                      <Carousel.Item>
                        <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/Homepage.png')}/>
                        <Carousel.Caption className="carousel-text">
                          <div className="overlay">
                            <h3>Homepage</h3>
                            <p>See what's trending including current top mentors.</p>
                          </div>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/mentor_search.png')}/>
                        <Carousel.Caption className="carousel-text">
                          <div className="overlay">
                            <h3>Mentor Search</h3>
                            <p>Search for mentors that have skills you wish to learn.</p>
                          </div>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/user-profile.png')}/>
                        <Carousel.Caption className="carousel-text">
                          <div className="overlay">
                            <h3>Profile Page</h3>
                            <p>Create and Edit your profile including skills, bio, and goals.</p>
                          </div>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                    <Media className="col-lg-12">
                      <Media.Body>
                        <Media.Heading>Devconnect</Media.Heading>
                        <p>Selected as team lead for Devconnect, a hub for Dev Bootcamp graduates to connect and flourish in its thriving community plus extending the culture of learning through mentoring. An alumni can contribute to DBC's 2000+ community by posting any relevant information to our extensive forums section. The top trending and most recent forum posts will appear in a tabbed content section on the homepage. If an alumni decides to become a "mentor" they can tutor students who are seeking specific skill sets that the mentor has and later be endorsed for those skills earning badges based on a number of endorsements. The top mentors will appear on the homepage celebrating their achievements in the community. The application was built with Ruby on Rails, React.js, HTML5, and Bootstrap CSS.</p>
                      </Media.Body>
                    </Media>
                </div> */}

        {/* Devconnect Modal */}
        <div>
          <Modal show={this.state.devconnect} onHide={() => this.close('devconnect')}>
            <Modal.Header closeButton>
              <Modal.Title>Devconnect |
              <OverlayTrigger trigger={['hover','focus']} placement="bottom" overlay={popoverHoverFocus}>
                <a  target="_blank" href="https://devconnect-portal.herokuapp.com"> https://devconnect-portal.herokuapp.com</a>
              </OverlayTrigger></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>User Functionality</h4>
              <p>An alumni can contribute to DBC's 2000+ community by posting any relevant information to our extensive forums section. The top trending and most recent forum posts will appear in a tabbed content section on the homepage. If an alumni decides to become a "mentor" they can tutor students who are seeking specific skill sets that the mentor has and later be endorsed for those skills earning badges based on a number of endorsements. The top mentors will appear on the homepage celebrating their achievements in the community. The application was built with Ruby on Rails, React.js, HTML5, and Bootstrap CSS.</p>
              <hr />
              <Carousel>
                <Carousel.Item>
                  <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/Homepage.png')}/>
                  <Carousel.Caption className="carousel-text">
                    <div className="overlay">
                      <h3>Homepage</h3>
                      <p>See what's trending including current top mentors.</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/mentor_search.png')}/>
                  <Carousel.Caption className="carousel-text">
                    <div className="overlay">
                      <h3>Mentor Search</h3>
                      <p>Search for mentors that have skills you wish to learn.</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/user-profile.png')}/>
                  <Carousel.Caption className="carousel-text">
                    <div className="overlay">
                      <h3>Profile Page</h3>
                      <p>Create and Edit your profile including skills, bio, and goals.</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/ForumHome.png')}/>
                  <Carousel.Caption className="carousel-text">
                    <div className="overlay">
                      <h3>Forum Topics</h3>
                      <p>Read or contribute to a topic that interests you.</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/forum.png')}/>
                  <Carousel.Caption className="carousel-text">
                    <div className="overlay">
                      <h3>Forum Topic</h3>
                      <p>Read or respond to posts made within that topic.</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.close('devconnect')}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

        {/* Space Quest Modal */}
      <div>
        <Modal show={this.state.arcadeGame} onHide={() => this.close('arcadeGame')} dialogClassName="arcade-game-modal">
          <Modal.Header closeButton>
            <Modal.Title>Space Quest Arcade Game</Modal.Title>
            <p>(Please allow the game a few seconds to load)</p>
          </Modal.Header>
          <Modal.Body>
            <p>What I learned building this game:</p>
            <ul>
              <li>Using multiple canvases to draw game pieces</li>
              <li>Creating abstract objects that other game related objects will inherit from</li>
              <li>A better understading of Javascripts prototype property</li>
              <li>Using multiple canvases layered to reduce redrawing the game completely</li>
              <li>The use of object pools to reuse old objects which limits creation and deletion to improve performance</li>
            </ul>
            <p>Instructions:</p>
            <ul>
              <li>First click inside the game screen</li>
              <li>Use the up, down, left, right keys to move</li>
              <li>Press the spacebar to shoot</li>
              <li>Shoot as many enemy ships as you can and get the high score!</li>
            </ul>
            <div className="iframe-wrapper">
              <iframe src="https://protected-temple-76163.herokuapp.com" width="600" height="360"></iframe>
            </div> 
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={() => this.close('arcadeGame')}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* PolicyGenius Modal */}
      <div>
        <Modal show={this.state.pg} onHide={() => this.close('pg')} dialogClassName="pg-modal">
          <Modal.Header closeButton>
            <Modal.Title>PolicyGenius.com CMS Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              As part of my contribution to this project I helped create custom dynamic content templates that integrated a Ruby framework called Middleman with a tool called DatoCMS.
              These specific pages were a part of two types of dynamic pages for the Long Term Disability Insurance products. First, a learning center where customers can gain information
              to make more informed decisions plus an article template for the content team to quickly create the product related articles.
              <br/>
              Check out a live production example here:
              <ul>
                <li>
                  <a target="_blank" href="https://www.policygenius.com/long-term-disability-insurance/learn"> https://www.policygenius.com/long-term-disability-insurance/learn</a>
                </li>
                <li>
                  <a target="_blank" href="https://www.policygenius.com/long-term-disability-insurance/learn"> https://www.policygenius.com/long-term-disability-insurance/learn/how-much-does-long-term-disability-insurance-cost</a>
                </li>
              </ul>
            </p>
            <p>What I learned working on this project:
              <ul>
                <li>Working with BEM & Atomic Design CSS</li>
                <li>Help build a custom CDN and with separate build pipeline with Buildkite</li>
                <li>Building a custom artcile scroll spy with Javascript Intersection Observer</li>
                <li>Tracking page analytics and visits with Segment.io</li>
                <li>Creating dynamic pages and custom templates from external data source (DatoCMS)</li>
                <li>Communicating with outside teams and product management on technical requirements</li>
              </ul>
            </p>
            <br />
          <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
              <Carousel.Item>
                <div className="iframe-wrapper">
                  <iframe src="https://drive.google.com/file/d/0B43Ydmpo69cbNk85Ti1QUWdSVTA/preview" width="600" height="360"></iframe>
                </div>
                <Carousel.Caption className="carousel-text">
                  <div className="overlay">
                    <h3>Desktop version</h3>
                    <p></p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="iframe-wrapper">
                  <iframe src="https://drive.google.com/file/d/0B43Ydmpo69cbYkpwY0JQQzdMUkk/preview" width="600" height="360"></iframe>
                </div>
                <Carousel.Caption className="carousel-text">
                  <div className="overlay">
                    <h3>Mobile version</h3>
                    <p></p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={() => this.close('pg')}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* BingeWatch Modal */}
      <div>
        <Modal show={this.state.bingeWatch} onHide={() => this.close('bingeWatch')} dialogClassName="pg-modal">
          <Modal.Header closeButton>
              <Modal.Title>BingeWatch |
                <OverlayTrigger trigger={['hover','focus']} placement="bottom" overlay={popoverHoverFocus}>
                  <a  target="_blank" href="https://binge-watch.herokuapp.com"> https://binge-watch.herokuapp.com</a>
                </OverlayTrigger>
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              This is a single page application built with the most modern frameworks in mind: Rails 5 and GraphQL backend, React.js and Redux on the frontend using webpack with Bootstrap CSS.
              This project is ongoing so check back in for more features!
            </p>
            <p>What I learned working on this project:
              <ul>
                <li>More about how webpack works</li>
                <li>Working with yarn to manage Javascript packages</li>
                <li>How to manage state with the Redux store plus Redux Form</li>
                <li>Using a single endpoint for server requests with GraphQL</li>
                <li>Strengthening my skills with React.js</li>
                <li>Testing parts of the front end logic with Jest</li>
              </ul>
            </p>
            <br/>
            <div className="iframe-wrapper">
              <iframe src="https://drive.google.com/file/d/0B43Ydmpo69cbMW53cWFiUHQ2M1E/preview"  width="600" height="360"></iframe>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.close('bingeWatch')}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
    );
  }
}

export default Portfolio;
