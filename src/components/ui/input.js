import React from 'react';

export const Input = ({ id, name, value, type = 'text', onChange, required = false }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="input"
    />
  );
};
