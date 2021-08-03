import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="masthead mb-5">
        <div className="w-100 pt-5 pb-5">
          <div className="masthead-title col-10 text-center d-flex justify-content-around m-auto">
              <div className="d-flex header__text-logo">
                <h1>Test technique - AXA</h1>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;