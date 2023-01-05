interface TableProps {
  data: DataProps[];
  config: ConfigProps[];
}
interface DataProps {
  name: string;
  color: string;
  score: number;
}
interface ConfigProps {
  label: string;
  render: (fruits: any) => string | number | any;
}
const Table = ({ data, config }: TableProps) => {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedData = data.map((fruits) => {
    const confgRender = config.map((config) => {
      return (
        <td className='p-2' key={config.label}>
          {config.render(fruits)}
        </td>
      );
    });
    return (
      <tr className='border-b' key={fruits.name}>
        {confgRender}
      </tr>
    );
  });
  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
};

export default Table;
