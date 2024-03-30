import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';
import { Column, CellProps } from 'react-table';

interface DataRow {
  company: string;
  product: string;
  description: string;
  type: string;
  opensource: string;
  link: string;
}

const DescriptionWithBreaks: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      {text.split('\n').map((segment, index, array) => (
        <React.Fragment key={index}>
          {segment}{index < array.length - 1 ? <br /> : null}
        </React.Fragment>
      ))}
    </>
  );
};

const columns: Column<DataRow>[] = [
  {
    Header: 'Company',
    accessor: 'company',
    minWidth: 160,
  },
  {
    Header: 'Product Name',
    accessor: 'product',
    minWidth: 160,
    Cell: ({ row }: CellProps<DataRow>) => (
      <a href={row.original.link} target="_blank" rel="noopener noreferrer">
        {row.original.product}
      </a>
    ),
  },
  {
    Header: 'Description',
    accessor: 'description',
    minWidth: 250,
    Cell: ({ value }) => <DescriptionWithBreaks text={value} />,
  },
  {
    Header: 'Type',
    accessor: 'type',
    minWidth: 150,
  },
  {
    Header: 'Open Source',
    accessor: 'opensource',
    minWidth: 55,
    Cell: ({ value }) => <DescriptionWithBreaks text={value} />,
  },
];

function App() {
  const [data, setData] = useState<DataRow[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error("Failed to load data", error));
  }, []);

  return (
    <div className="App">
      <div className="header-container">
        <h1 className="App-header">Identity Product Listing</h1>
        <a href="https://github.com/iamabrom/identity-Product-Listing" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/stars/iamAbrom/identity-Product-Listing?style=social&label=Contribute%20to%20this%20listing" className="top-link" />
        </a>
      </div>
      {/* <div className="table-container"> */}
        {/* @ts-expect-error */}
        <Table columns={columns} data={data} />
      {/* </div> */}
    </div>
  );
}

export default App;
