import React from "react";

export default function Item({ dato, handleInputChange }) {
  return (
    <div className="form-group">
      <label className="form-label py-2 fs-5">{dato.label}</label>
      {dato.type === "select" ? (
        <select
          className="form-select"
          name={dato.name}
          required={dato.required}
          onChange={handleInputChange}
        >
          {dato.options.map((option) => (
            <option value={option.value} name={dato.name}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={dato.type === "checkbox" ? "form-check" : "form-control "}
          type={dato.type}
          placeholder={dato.label}
          name={dato.name}
          required={dato.required}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
}
