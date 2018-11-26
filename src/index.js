import React from "react";
import ReactDOM from "react-dom";
import "./css/TopNav.css";
// import "./css/index.css";
// import "./css/App.css";

import App from "./component/App";
import * as serviceWorker from "./serviceWorker";
import TopNav from "./component/TopNav";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
