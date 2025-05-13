import React from "react";
import "./TabButton.css";

export default function TabButton({ onSelect, children }) {
  return (
    <button className="tab-button" onClick={onSelect}>
      {children}
    </button>
  );
}
