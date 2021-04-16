import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default class ThemeSwitcher extends React.Component {
  render() {
    console.log("ThemeSwitcher.render");

    //   changeMode is the function that changes (isDark state) isDark is the state itself
    const { isDark, changeMode } = this.props;
    return (
      <button
        onClick={() => {
          changeMode();
        }}
        className="app__dark-mode-btn icon level-right"
      >
        <FontAwesomeIcon
          icon={isDark ? faSun : faMoon}
          color={isDark ? "#FFA500" : "#4D5B6B"}
        />
      </button>
    );
  }
}
