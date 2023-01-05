import { useEffect, useRef, useState } from "react";
import Panel from "./Panel";

interface DropdownBluePrint {
  options: DropdownObject[];
  selection: DropdownObject | null;
  onSelect: (option: DropdownObject) => void;
}
export interface DropdownObject {
  value: string;
  label: string;
}
const Dropdown = ({
  options,
  selection,
  onSelect,
}: DropdownBluePrint): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const divEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (event: any) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const handleOptionClick = (options: DropdownObject) => {
    setIsOpen(false);
    onSelect(options);
  };

  const renderedItems = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {selection?.label || "Select..."}
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedItems}</Panel>}
    </div>
  );
};
export default Dropdown;
