import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

let personDetails = {
  name: "Rajesh",
  age: "22",
  className: "btn"
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <ChildComponent className="btn-primary" {...personDetails} />
      </div>
    );
  }
}

export default App;

// function MyButton({ className = "", ...props }) {
//   let classNames = ["btn", className].join(" ");

//   return <button className={classNames} {...props} />;
// }
