import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContext from "./theme-context";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  },
  name: "Magesh"
};

ReactDOM.render(
  <ThemeContext.Provider value={themes}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
);
