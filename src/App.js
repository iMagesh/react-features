import React from "react";
import Loadable from "react-loadable";
// import ChildComponent from "./ChildComponent";

const loading = () => <h1>loading split code...</h1>;

const LoadableComponent = Loadable({
  loader: () => import("./ChildComponent"),
  loading
});

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ChildComponent fromParent="parent data" /> */}
        <LoadableComponent fromParent="parent data" />
      </div>
    );
  }
}

export default App;
