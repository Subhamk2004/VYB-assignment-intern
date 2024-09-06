import React from 'react';

const CustomRangeInput = ({ min, max, value, onChange }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className="custom-range"
    />
  );
};

export default CustomRangeInput;