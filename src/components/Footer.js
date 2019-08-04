import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="text-center">
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-offset-2 vcenter">
                <button type="submit" className="btn btn-warning btn-lg">
                  <a href="https://drive.google.com/file/d/1PP1BXLXTEcafasejZIobxxWNZOXRsIXs/view?usp=sharing" target="_blank"><span className="glyphicon glyphicon-save-file" aria-hidden="true"></span> Download Resume</a>
                </button>
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
                Copyright &copy; Peter Duke 2019
                    </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
