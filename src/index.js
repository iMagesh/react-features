import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { increasing: false };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ increasing: nextProps.val > this.props.val });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`);
    console.log(prevState);
    console.log(this.state);
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById("root")
    );
  }
  render() {
    console.log(this.state.increasing);
    return <button onClick={this.update.bind(this)}>{this.props.val}</button>;
  }
}

App.defaultProps = { val: 0 };

ReactDOM.render(<App />, document.getElementById("root"));
