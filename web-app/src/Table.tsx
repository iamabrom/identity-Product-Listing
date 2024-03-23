// import React from 'react';
// import { useTable, useSortBy, useFilters, Column } from 'react-table';
// import './table.css'; // Make sure the stylesheet is correctly imported

// // Define a default UI for filtering
// const DefaultColumnFilter = ({
//   column: { filterValue, setFilter },
// }) => (
//   <input
//     value={filterValue || ''}
//     onChange={e => setFilter(e.target.value || undefined)}
//     placeholder={`Search...`}
//     className="filter-input" // Ensure this matches your CSS class for styling
//   />
// );

// // Define the table's props including the types for columns and data
// interface TableProps {
//   columns: Column[];
//   data: {}[];
// }

// const Table: React.FC<TableProps> = ({ columns, data }) => {
//   const defaultColumn = React.useMemo(() => ({
//     Filter: DefaultColumnFilter,
//   }), []);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable(
//     {
//       columns,
//       data,
//       defaultColumn,
//     },
//     useFilters, // Use the useFilters hook to enable filtering
//     useSortBy    // Use the useSortBy hook to enable sorting
//   );

//   // Render UI for the table
//   return (
//     <table {...getTableProps()} className="table">
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()} className="tr">
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
//                 {column.render('Header')}
//                 {/* Render the column filter UI */}
//                 <div>{column.canFilter ? column.render('Filter') : null}</div>
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map(row => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()} className="tr">
//               {row.cells.map(cell => (
//                 <td {...cell.getCellProps()} className="td">{cell.render('Cell')}</td>
//               ))}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default Table;

// ============================== VERSION 1 ABOVE ==============================

// import React from 'react';
// import { useTable, useSortBy, useFilters, ColumnInstance, Row } from 'react-table';
// import './Table.css'; // Ensure the stylesheet is correctly imported

// // Define a default UI for filtering
// const DefaultColumnFilter = ({
//   column: { filterValue, setFilter },
// }: {
//   column: ColumnInstance;
// }) => (
//   <input
//     value={filterValue || ''}
//     onChange={(e) => setFilter(e.target.value || undefined)}
//     placeholder={`Search...`}
//     className="filter-input" // Apply the class name for styling
//   />
// );

// interface TableProps {
//   columns: any[];
//   data: object[];
// }

// const Table: React.FC<TableProps> = ({ columns, data }) => {
//   const defaultColumn = React.useMemo(
//     () => ({
//       Filter: DefaultColumnFilter,
//     }),
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable(
//     {
//       columns,
//       data,
//       defaultColumn,
//     },
//     useFilters, // Use the useFilters hook to enable filtering
//     useSortBy    // Use the useSortBy hook to enable sorting
//   );

//   // Render UI for the table
//   return (
//     <table {...getTableProps()} className="table">
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()} className="tr">
//             {headerGroup.headers.map((column) => (
//               <th
//                 {...column.getHeaderProps(column.getSortByToggleProps())}
//                 className="th"
//                 style={{ minWidth: `${column.minWidth}px` }}
//               >
//                 {column.render('Header')}
//                 {/* Render the column filter UI */}
//                 <div>{column.canFilter ? column.render('Filter') : null}</div>
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row: Row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()} className="tr">
//               {row.cells.map((cell) => {
//                 return (
//                   <td
//                     {...cell.getCellProps()}
//                     className="td"
//                     style={{ minWidth: `${cell.column.minWidth}px` }}
//                   >
//                     {cell.render('Cell')}
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default Table;

// ============================== VERSION 2 ABOVE ==============================

// import React from 'react';
// import { useTable, useSortBy, useFilters, Column, ColumnInstance} from 'react-table';
// import './Table.css'; // Ensure you have the correct path to your CSS file

// // Define a default UI for filtering
// const DefaultColumnFilter = ({
//   //@ts-expect-error
//   column: { filterValue, setFilter },
// }) => (
//   <input
//     value={filterValue || ''}
//     onChange={e => setFilter(e.target.value || undefined)}
//     placeholder={`Search...`}
//     className="filter-input" // Ensure this matches your CSS class for styling
//   />
// );

// interface TableProps {
//   columns: Column[];
//   data: {}[];
// }

// const Table: React.FC<TableProps> = ({ columns, data }) => {
//   const defaultColumn = React.useMemo(() => ({
//     Filter: DefaultColumnFilter,
//   }), []);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable(
//     {
//       columns,
//       data,
//       defaultColumn,
//     },
//     useFilters, // Use the useFilters hook to enable filtering
//     useSortBy    // Use the useSortBy hook to enable sorting
//   );

//   // Render UI for the table
//   return (
//     <table {...getTableProps()} className="table">
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()} className="tr">
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps(column.getSortByToggleProps())} className="th" style={{ minWidth: column.minWidth }}>
//                 {column.render('Header')}
//                 {/* Render the sorting indicator */}
//                 <span>
//                   {column.isSorted
//                     ? column.isSortedDesc
//                       ? ' 🔽'
//                       : ' 🔼'
//                     : ''}
//                 </span>
//                 {/* Render the column filter UI */}
//                 <div>{column.canFilter ? column.render('Filter') : null}</div>
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map(row => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()} className="tr">
//               {row.cells.map(cell => (
//                 <td {...cell.getCellProps()} className="td" style={{ minWidth: cell.column.minWidth }}>
//                   {cell.render('Cell')}
//                 </td>
//               ))}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default Table;


// ============================== VERSION 3 ABOVE ==============================

import React from 'react';
import { useTable, useSortBy, useFilters, Column } from 'react-table';
import './Table.css'; // Make sure the stylesheet is correctly imported

// Define a default UI for filtering
const DefaultColumnFilter = ({
  column: { filterValue, setFilter },
}) => (
  <input
    value={filterValue || ''}
    onChange={e => setFilter(e.target.value || undefined)}
    placeholder="Search..."
    className="filter-input" // Ensure this matches your CSS class for styling
  />
);

interface TableProps {
  columns: Column[];
  data: {}[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const defaultColumn = React.useMemo(() => ({
    Filter: DefaultColumnFilter,
  }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { sortBy: [{ id: 'product', desc: false }] }
    },
    useFilters, // Use the useFilters hook to enable filtering
    useSortBy    // Use the useSortBy hook to enable sorting
  );

  // Render UI for the table
  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map(column => (
              <th 
                {...column.getHeaderProps(column.getSortByToggleProps())} 
                className="th" 
                style={{ minWidth: column.minWidth }}
              >
                {column.render('Header')}
                {/* Render the sorting indicator */}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
                {/* Render the column filter UI */}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="tr">
              {row.cells.map(cell => (
                <td 
                  {...cell.getCellProps()} 
                  className="td" 
                  style={{ minWidth: cell.column.minWidth }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
