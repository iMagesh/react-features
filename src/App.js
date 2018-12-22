import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import ErrorBoundary from "./ErrorBoundary";

let details = ["Hello ", <span>World</span>, "!"];
class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <ChildComponent details={details} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

// function MyButton({ className = "", ...props }) {
//   let classNames = ["btn", className].join(" ");

//   return <button className={classNames} {...props} />;
// }
