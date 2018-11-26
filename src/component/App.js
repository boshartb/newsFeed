import React, { Component } from "react";
// import Newsfeed from "./Newsfeed";
import TopNav from "./TopNav";
import newsFeedData from "./data";

function Info(props) {
  const content = props.newsFeedData.map(newsFeedDataObject => (
    <div>
      <ul class="list-group-item">
        <ul class="list-unstyled">
          <li class="media">
            <img
              class="avatar mr-3 rounded-0"
              src={newsFeedDataObject.image}
              alt="Generic placeholder image"
            />
            <div class="media-body">
              <h5 class="mt-0 mb-1">{newsFeedDataObject.title} </h5>
              <p>{newsFeedDataObject.tags}</p>
              <p>{newsFeedDataObject.impressions}</p>
            </div>
          </li>
        </ul>
      </ul>
    </div>
  ));

  return (
    <div>
      <ul> {content}</ul>
    </div>
  );
}

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
