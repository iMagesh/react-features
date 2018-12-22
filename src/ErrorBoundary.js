import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // log using another service if required
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong</h2>;
    }
    return this.props.children;
  }
}
