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
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }


  render() {
    const popover = (
      <Popover id="modal-popover">
        Click to see more!
      </Popover>
      );

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        Click to demo the app!
      </Popover>
    );

    return(
      <section className="bg-portfolio" id="portfolio">
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

                {/* Version 2 with Media object on left side */}
                <div className="row">
                <Media className="col-md-4">
                    <Media.Left align="middle">
                      <div className="portfolio-item">
                      <OverlayTrigger placement="bottom" overlay={popover}>
                         <a onClick={this.open} href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
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
                      <Media.Heading><bold>Devconnect</bold>
                      </Media.Heading>
                      <p>Selected as team lead for Devconnect, a hub for Dev Bootcamp graduates to connect and flourish in its thriving community plus extending the culture of learning through mentoring. The application was built with Ruby on Rails, Python, Flask, React.js, HTML5, and Bootstrap CSS.</p>
                      <br/>
                      <OverlayTrigger trigger={['hover','focus']} placement="top" overlay={popoverHoverFocus}>
                        <p><a  target="_blank" href="https://devconnect-portal.herokuapp.com">Website: devconnect-portal.herokuapp.com</a></p>
                      </OverlayTrigger>
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
                        <p>Selected as team lead for Devconnect, a hub for Dev Bootcamp graduates to connect and flourish in its thriving community plus extending the culture of learning through mentoring. An alumni can contribute to DBC's 2000+ community by posting any relevant information to our extensive forums section. The top trending and most recent forum posts will appear in a tabbed content section on the homepage. If an alumni decides to become a "mentor" they can tutor students who are seeking specific skill sets that the mentor has and later be endorsed for those skills earning badges based on a number of endorsements. The top mentors will appear on the homepage celebrating their achievements in the community. The application was built with Ruby on Rails, Python, Flask, React.js, HTML5, and Bootstrap CSS.</p>
                      </Media.Body>
                    </Media>
                </div> */}


        <div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Devconnect |
            <OverlayTrigger trigger={['hover','focus']} placement="bottom" overlay={popoverHoverFocus}>
              <a  target="_blank" href="https://devconnect-portal.herokuapp.com"> devconnect-portal.herokuapp.com</a>
            </OverlayTrigger></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>User Functionality</h4>
            <p>An alumni can contribute to DBC's 2000+ community by posting any relevant information to our extensive forums section. The top trending and most recent forum posts will appear in a tabbed content section on the homepage. If an alumni decides to become a "mentor" they can tutor students who are seeking specific skill sets that the mentor has and later be endorsed for those skills earning badges based on a number of endorsements. The top mentors will appear on the homepage celebrating their achievements in the community. The application was built with Ruby on Rails, Python, Flask, React.js, HTML5, and Bootstrap CSS.</p>
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
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>




          </div>
      </section>

    );
  }
}

export default Portfolio;
