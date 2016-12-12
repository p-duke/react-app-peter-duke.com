import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="text-center">
        {/* <div className="footer-above">
            <div className="container">
                <div className="row">
                    <div className="footer-col col-md-4">
                        <h3>Download Resume</h3>
                        <button type="button" className="btn btn-info btn-lg">
                          <span className="glyphicon glyphicon-save-file" aria-hidden="true"></span> Download Resume
                        </button>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>Around the Web</h3>
                        <ul className="list-inline">
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div> */}

        {/* Version 2 */}
        {/* <div className="footer-below">
              <div className="container">
                  <div className="row">
                    <div className="col-md-4 vcenter">
                        <h3>Download Resume</h3>
                        <button type="button" className="btn btn-info btn-lg">
                          <span className="glyphicon glyphicon-save-file" aria-hidden="true"></span> Download Resume
                        </button>
                    </div>
                    <div className="col-md-4 vcenter">
                        <h3>Around the Web</h3>
                        <ul className="list-inline">
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 vcenter">
                      Copyright &copy; Peter Duke 2016
                    </div>
                </div>
            </div>
        </div> */}

        {/* Version 3 */}
        <div className="footer-below">
              <div className="container">
                  <div className="row">
                    <div className="col-offset-2 vcenter">
                        <button type="submit" className="btn btn-warning btn-lg">
                          <a href="https://drive.google.com/open?id=0B43Ydmpo69cbNWJMVlNtTVBJejg" target="_blank"><span className="glyphicon glyphicon-save-file" aria-hidden="true"></span> Download Resume</a>
                        </button>
                        {/* <a href={require('../public/PeterDuke_Resume.pdf')} target="_blank">Read more</a> */}
                    </div>
                    <div className="col-md-4 vcenter">
                      <ul className="list-inline">
                      <li>
                      <a target="_blank" href="https://github.com/p-duke" className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a>
                      </li>
                      <li>
                      <a target="_blank" href="https://www.linkedin.com/in/peter-duke" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                      </li>
                      </ul>
                    </div>
                    <div className="col-offset-2 vcenter">
                      Copyright &copy; Peter Duke 2016
                    </div>
                </div>
            </div>
        </div>
    </footer>

    );
  }
}

export default Footer;
