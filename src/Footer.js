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
                    <div className="col-lg-12 vcenter">
                        <div>
                          <button type="button" className="btn btn-info btn-lg">
                            <span className="glyphicon glyphicon-save-file" aria-hidden="true"></span> Download Resume
                          </button>
                        </div>
                        <div>
                          <ul className="list-inline">
                          <li>
                          <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a>
                          </li>
                          <li>
                          <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                          </li>
                          </ul>
                        </div>
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
