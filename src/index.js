import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    console.log("Component Will Mount");
    this.setState({ m: 2 });
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  update() {
    this.setState({ val: this.state.val + 1 });
  }

  render() {
    console.log("render");
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById("a"));
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("a"));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
      </div>
    );
  }
}

export default Wrapper;

ReactDOM.render(<Wrapper />, document.getElementById("root"));
