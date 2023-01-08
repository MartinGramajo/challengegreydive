import React from "react";

export default function Item({ dato }) {
  console.log("file: Item.jsx:4 ~ Item ~ dato ", dato);
  return (
    <div className="form-group">
      <label className="form-label">{dato.label}</label>
      {dato.type === "select" ? (
        <select
          className="form-select"
          name={dato.name}
          required={dato.required}
        >
          {dato.options.map((option) => (
            <option value={option.value} name={dato.name}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={dato.type === "checkbox" ? "form-check" : "form-control"}
          type={dato.type}
          placeholder={dato.label}
          name={dato.name}
          required={dato.required}
        />
      )}
    </div>
  );
}
