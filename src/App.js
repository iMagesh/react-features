import React from "react";
import ChildComponent from "./ChildComponent";
class App extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent fromParent="parent data" />
      </div>
    );
  }
}

export default App;
