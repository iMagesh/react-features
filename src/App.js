import React, { Component } from "react";
import withMouse from "./MouseHOC";

class App extends Component {
  render() {
    // Instead of maintaining our own state,
    // we get the mouse position as a prop!
    const { x, y } = this.props.mouse;

    return (
      <div style={{ height: "100%" }}>
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      </div>
    );
  }
}

export default withMouse(App);
