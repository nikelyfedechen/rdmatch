import React from 'react';

function Checkbox({ children, id, ...props }) {
  const sanitizeId = (str) => str.toLowerCase().replace(/\s+/g, '-');
  return (
    <label htmlFor={sanitizeId(id)} className="flex items-center">
      <input
        id={sanitizeId(id)}
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500"
        {...props}
      />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
