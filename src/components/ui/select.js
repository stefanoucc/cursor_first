import React, { useState } from 'react';

export const Select = ({ onValueChange, children }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onValueChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleChange} className="select">
      {children}
    </select>
  );
};

export const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
