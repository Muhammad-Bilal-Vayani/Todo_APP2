// Input_Field.js
import React from "react";

const Input_Field = ({ id, placeholder, type, onChange, value, className }) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    />
  );
};

export { Input_Field };
