import React from "react";

const TableHeader = ({ columns }) => (
  <thead className="bg-gray-300">
    <tr>
      {columns.map((columnName, index) => (
        <th
          key={index}
          className="px-6 py-3 text-left font-semibold uppercase tracking-wide"
        >
          {columnName}
        </th>
      ))}
    </tr>
  </thead>
);

const TableBody = ({ data }) => (
  <tbody>
    {data.map((row, index) => (
      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
        {Object.values(row).map((val, index) => (
          <td key={index} className="px-6 py-4 whitespace-nowrap">
            {val}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

const TableComponent = ({ data }) => {
  const columnNames = Object.keys(data[0]);

  return (
    <div className="mr-1 p-2 rounded-lg h-full w-full bg-white flex gap-4 overflow-scroll">
      <table
        className="h-full w-full border-collapse border border-gray-300 rounded-lg"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TableHeader columns={columnNames} />
        <TableBody data={data} />
      </table>
    </div>
  );
};

export default TableComponent;
