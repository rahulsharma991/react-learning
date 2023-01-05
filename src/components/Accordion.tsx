import { useState } from "react";

interface AccordionBluePrint {
  items: ItemObject[];
}
interface ItemObject {
  id: number | string;
  label: string;
  content: string;
}
const Accordion = ({ items }: AccordionBluePrint) => {
  const [expandedIndex, setExpandedIndex] = useState(2);

  const clickHandler = (index: number) => {
    setExpandedIndex((current) => {
      if (current == index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  const renderedItems = items.map((elements, index) => {
    const isExpanded = index == expandedIndex;
    return (
      <div key={elements.id} className='m-4'>
        <div
          className='text-xl font-semibold'
          onClick={() => clickHandler(index)}
        >
          {elements.label}
        </div>
        {isExpanded && (
          <div className='text-orange-600'>{elements.content}</div>
        )}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
};

export default Accordion;
