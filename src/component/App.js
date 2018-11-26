import React, { Component } from "react";
import Info from "./Info";
import TopNav from "./TopNav";
import newsFeedData from "./data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <ul className="newsFeedData" />
        <Info newsFeedData={newsFeedData} />
      </div>
    );
  }
}

export default App;
