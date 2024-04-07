import React from 'react';
import { useTable, useSortBy, useFilters, Column } from 'react-table';
import './Table.css';

const DefaultColumnFilter = ({
  // @ts-expect-error
  column: { filterValue, setFilter },
}) => (
  <input
    value={filterValue || ''}
    onChange={e => setFilter(e.target.value || undefined)}
    onClick={e => e.stopPropagation()}
    placeholder="Search..."
    className="filter-input"
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
      // @ts-expect-error
      defaultColumn,
      // @ts-expect-error
      initialState: { sortBy: [{ id: 'product', desc: false }] }
    },
    useFilters,
    useSortBy
  );

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map(column => (
              <th 
              // @ts-expect-error
                {...column.getHeaderProps(column.getSortByToggleProps())} 
                className="th" 
                style={{
                  minWidth: column.minWidth,
                  maxWidth: column.maxWidth,
                 }}
              >
                {column.render('Header')}
                <span>
                {/* @ts-expect-error */}
                  {column.isSorted
                  // @ts-expect-error
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
                {/* @ts-expect-error */}
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
                  style={{
                    minWidth: cell.column.minWidth,
                    maxWidth: cell.column.maxWidth
                  }}
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
