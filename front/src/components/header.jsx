import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div className="masthead mb-5">
        <div className="w-100 pt-4 pb-4">
          <div className="masthead-title col-10 text-center d-flex m-auto">
              <div className="d-flex header__text-logo w-100">
                {/* Conditional rendering - Responsif */}
                {window.innerWidth > 776 ?
                  (<div className="masthead-title col-10 text-center d-flex justify-content-around m-auto">
                    <div className="btn_white pt-2 m-auto" id="btn_year">
                      <Link to="/stats" className="m-auto">All the year!</Link>
                    </div>
                    <img src="https://res.cloudinary.com/viviennoel07/image/upload/c_scale,w_398/v1628020618/axa-banque-logo-black-and-white_v4f7u5.png" title="logo" className="header_logo" alt="logo"></img>
                    <div className="btn_white pt-2 m-auto">
                      <Link to="/" className="m-auto">Latest Evolutions</Link>
                    </div>
                  </div>)
                  :
                  (<div className="d-flex w-100 justify-content-between">
                    <div className="dropdown show">
                      <button className="btn btn-secondary dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src='https://res.cloudinary.com/viviennoel07/image/upload/v1620734628/menu_rlw3oe.png' id="button_drop" className="menu_icon m-auto" alt="website" />
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <ul className="dropdown-list m-auto text-center">
                        <h6 className="dropdown-header">Your menu</h6>
                          <li><Link to="/stats" className="m-auto">All the year!</Link></li>
                          <li><Link to="/" className="m-auto">Latest Evolutions</Link></li>
                        </ul>
                      </div>
                    </div>
                    <img src="https://res.cloudinary.com/viviennoel07/image/upload/c_scale,w_398/v1628020618/axa-banque-logo-black-and-white_v4f7u5.png" title="logo" className="header_logo" alt="logo"></img>
                  </div>)
                }
                
                
                
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;