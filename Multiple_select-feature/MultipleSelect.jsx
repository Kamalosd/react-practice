import React from "react";
import Select from "react-select";

const countryList = [
  {
    value: "india",
    label: "India",
  },
  {
    value: "iran",
    label: "Iran",
  },
  {
    value: "pak",
    label: "Pak",
  },
];

const App = () => {

  const handleMultiSelect=(data)=>{
    console.log(data)
  }
  return (
    <div className="flex  flex-col justify-center items-center text-2xl">
      <h1>multiple select</h1>

      <Select
        options={countryList}
        isMulti={true}
        onChange={handleMultiSelect}
        className="w-80 m-10 border border-black"
      />
    </div>
  );
};

export default App;
