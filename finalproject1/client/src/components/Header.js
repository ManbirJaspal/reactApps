import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui container">

      <div className="ui inverted menu">
        <div className="header item">
          TIO
        </div>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent inverted icon input">
              <i className="search icon"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="item ">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
