import { useState } from "react";
import Dropdown, { DropdownObject } from "../components/Dropdown";

const DropdownPage = (): JSX.Element => {
  const [selection, setSelection] = useState<DropdownObject | null>(null);
  const handleSelect = (option: DropdownObject) => {
    setSelection(option);
  };

  const options = [
    {
      value: "red",
      label: "Red",
    },
    {
      value: "green",
      label: "Green",
    },
    {
      value: "blue",
      label: "Blue",
    },
  ];
  return (
    <Dropdown options={options} selection={selection} onSelect={handleSelect} />
  );
};
export default DropdownPage;
