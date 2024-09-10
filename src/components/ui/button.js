import React from 'react';

export const Button = ({ children, type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {children}
    </button>
  );
};
