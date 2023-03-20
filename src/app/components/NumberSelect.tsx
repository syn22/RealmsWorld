import React, { useState } from "react";

interface Props {
  onChange: (value: string) => void;
  min: number;
  max: number;
}

const NumberSelect = ({ onChange, min, max }: Props) => {
  const [value, setValue] = useState("");

  const handleNumber1Change = (event: any) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <input
      type="number"
      id="number1"
      value={value}
      min={min}
      max={max}
      onChange={handleNumber1Change}
      className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default NumberSelect;
