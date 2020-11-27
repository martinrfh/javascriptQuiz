import React from "react";
import "./styles.css";

export default function Button({ text, padding, width, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="btn"
        style={Object.assign(width, padding)}
      >
        {text}
      </button>
    </div>
  );
}
