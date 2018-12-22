import React from "react";
import ReactDOM from "react-dom";
import ChildComponent from "./ChildComponent";

export default function App() {
  return (
    <div>
      <ChildComponent />
    </div>
  );
}

ReactDOM.render(App, document.getElementById("root"));
