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
    console.log(ReactDOM.findDOMNode(this));

    // lets try setting something that can be cleaned up in unMount later
    this.inc = setInterval(this.update, 500);
    //click on unmount and above will throw error in console if you don't cleaned it during unmount
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    clearInterval(this.inc); // without this there will be an error in the console when you try to unmount
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
