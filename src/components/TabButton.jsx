import React from "react";
import "./TabButton.css";

export default function TabButton({ onSelect, children, isSelected }) {
  return (
    <button className={isSelected ? "active" : undefined} onClick={onSelect}>
      {children}
    </button>
  );
}
