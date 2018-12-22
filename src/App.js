import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChildComponent name="Rajesh" age="22" />
      </div>
    );
  }
}

export default App;
