import React, { Component } from "react";
import addTheme from "./ThemeHOC";

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.fromParent}</p>
        <p style={this.props.theme}>This is a sample text</p>
      </div>
    );
  }
}

export default addTheme(ChildComponent);
