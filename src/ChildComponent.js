import React, { Component } from "react";
import ThemeContext from "./theme-context";

class ChildComponent extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return <h1>{context.name}</h1>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default ChildComponent;
