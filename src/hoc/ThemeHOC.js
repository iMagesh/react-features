import React from "react";

const ThemeHOC = Component => {
  const appData = {
    name: "HOC App",
    theme: { backgroundColor: "black", color: "white" },
    userAuth: true
  };
  return class ComposedComponent extends React.Component {
    render() {
      return <Component {...appData} {...this.props} />;
    }
  };
};

export default ThemeHOC;
