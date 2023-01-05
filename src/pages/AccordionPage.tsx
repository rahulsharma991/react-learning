import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: 1,
      label: "Project in react",
      content: "This is a react project index 1",
    },
    {
      id: 2,
      label: "Hooks in react",
      content: "This is a react project index 2",
    },
    {
      id: 3,
      label: "jsx in react",
      content: "This is a react project index 3",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
