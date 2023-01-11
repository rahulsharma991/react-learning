import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { label: "Name", render: (fruits: { name: string }) => fruits.name },
    {
      label: "Color",
      render: (fruits: { color: any }) => (
        <div className={`p-3 m-2 ${fruits.color}`}></div>
      ),
    },
    {
      label: "Score",
      render: (fruits: { score: number }) => fruits.score,
      header: () => <th className='bg-red-500'>Score</th>,
    },
  ];
  return <Table data={data} config={config} />;
};
export default TablePage;
