import React from "react";
import Loadable from "react-loadable";

const loading = () => <h2>Loading...</h2>;
const LoadableComponent = Loadable({
  loader: () => import("./ChildComponent"),
  loading
});

class App extends React.Component {
  state = {
    showComponent: false
  };

  handleClick = event => {
    this.setState({
      showComponent: true
    });
  };

  render() {
    if (this.state.showComponent) {
      return <LoadableComponent />;
    } else {
      return (
        <React.Fragment>
          <h1>Hello!</h1>
          <button onClick={this.handleClick}>Click me!</button>
        </React.Fragment>
      );
    }
  }
}

export default App;
