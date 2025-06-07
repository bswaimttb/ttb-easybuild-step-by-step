import React from "react";

export function MultiSelect({ options, selected = [], onChange, ranked = false }) {
  const toggleSelect = (option) => {
    const newSelection = selected.includes(option)
      ? selected.filter((o) => o !== option)
      : [...selected, option];

    onChange(ranked ? sortSelection(newSelection) : newSelection);
  };

  const sortSelection = (list) => {
    return [...list].sort((a, b) => options.indexOf(a) - options.indexOf(b));
  };

  return (
    <div className="space-y-1">
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggleSelect(option)}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}
