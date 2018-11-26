import React, { Component } from "react";
// import Newsfeed from "./Newsfeed";
import TopNav from "./TopNav";

const newsFeedData = [
  {
    title: "Lorem Ipsum",
    tags: "Placeholder1",
    image: "https://loremflickr.com/400/250/dog?a",
    impressions: "10"
  },
  {
    title: "Dolor Sit Amet",
    tags: "Placeholder2",
    image: "https://loremflickr.com/400/250/dog?b",
    impressions: "15"
  },
  {
    title: "Nesque Ipsum",
    tags: "Placeholder2",
    image: "https://loremflickr.com/400/250/dog?c",
    impressions: "100"
  }
];

function Newsfeed(props) {
  const content = props.newsFeedData.map(newsFeedData => (
    <div>
      <ul class="list-group-item">
        <ul class="list-unstyled">
          <li class="media">
            <img
              class="avatar mr-3 rounded-0"
              src={newsFeedData.image}
              alt="Generic placeholder image"
            />
            <div class="media-body">
              <h5 class="mt-0 mb-1">{newsFeedData.title} </h5>
              {newsFeedData.tags}
              <p>{newsFeedData.impressions}</p>
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
        <Newsfeed newsFeedData={newsFeedData} />
      </div>
    );
  }
}

export default App;
