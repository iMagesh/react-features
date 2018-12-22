import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    throw new Error("I'm a stupid error");
    return <div onClick={this.handleClick}>{this.props.details}</div>;
  }
}

export default ChildComponent;
