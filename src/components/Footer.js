import React from 'react'

function Footer() {
    return (
      <div className = "">
          <footer className = "page-footer red darken-3">
              <div className = "container">
                  <div className = "row">
                      <div className = "col s12 l6">
                          <h5> About </h5>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                      </div>
                      <div className = "col s12 l4 offset-l2">
                          <h3> Connect Us </h3>
                          <li><a href="" className="grey-text text-lighten-3"> Facebook </a></li>
                          <li><a href="" className="grey-text text-lighten-3"> Twitter </a></li>
                          <li><a href="" className="grey-text text-lighten-3"> Instagram </a></li>
                      </div>
                  </div>
              </div>
              <div className = "footer-copyright red darken-4">
                <div className="container center-align"> Delicioso </div>
              </div>

          </footer> 
      </div>
    );
  }
  
  export default Footer;