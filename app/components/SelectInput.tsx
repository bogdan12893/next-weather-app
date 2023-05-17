"use client";

import Select from "react-select";

export default function SelectInput() {
  const click = () => {
    console.log("clicked");
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <button onClick={click}>click me</button>
      <Select options={options} />
    </div>
  );
}
