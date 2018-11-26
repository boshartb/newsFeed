import React, { Component } from "react";

class TopNav extends React.Component {
  render() {
    return (
      <div className="topNav">
        <nav class="navbar navbar-expand-lg">
          <a>Feeder</a>

          <div id="navbarText">
            <span class="navbar-text">
              <input
                type="text"
                required
                placeholder="News Source Source Name"
              />

              <button type="submit" className="justify-content">
                <i class="fa fa-search" />
              </button>
            </span>
          </div>
        </nav>

        {/* <input type="text" required placeholder="News Source Source Name" />
        <button type="submit">
          <i class="fa fa-search" />
        </button> */}
      </div>
    );
  }
}
export default TopNav;
