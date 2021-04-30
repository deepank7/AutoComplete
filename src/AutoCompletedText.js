import React, { useState } from "react";
import countries from "./Countries";
import "./App.css";

function AutoCompletedText() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = countries.sort().filter((v) => regex.test(v));
    }

    setSuggestions(suggestions);
  };

  const selectedText = (value) => {
    setText(value);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => selectedText(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div id="notebooks">
      <h2>Auto Completed</h2>
      <input id="query" type="text" onChange={onTextChange} value={text} />
      {renderSuggestions()}
      <span>Suggestions: {suggestions.length}</span>
    </div>
  );
}

export default AutoCompletedText;
