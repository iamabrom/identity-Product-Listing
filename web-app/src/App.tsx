import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';
import { Column, CellProps } from 'react-table';
import importedData from './data/data.json';

interface DataRow {
  company: string;
  product: string;
  description: string;
  functions: string;
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
    minWidth: 175,
    maxWidth: 200,
  },
  {
    Header: 'Product Name',
    accessor: 'product',
    minWidth: 175,
    maxWidth: 200,
    Cell: ({ row }: CellProps<DataRow>) => (
      <a href={row.original.link} target="_blank" rel="noopener noreferrer">
        {row.original.product}
      </a>
    ),
  },
  {
    Header: 'Description',
    accessor: 'description',
    minWidth: 225,
    // maxWidth: 200,
    Cell: ({ value }) => <DescriptionWithBreaks text={value} />,
  },
  {
    Header: 'Functions',
    accessor: 'functions',
    minWidth: 170,
    maxWidth: 200,
  },
  {
    Header: 'Open Source',
    accessor: 'opensource',
    minWidth: 115,
    maxWidth: 125,
    Cell: ({ value }) => <DescriptionWithBreaks text={value} />,
  },
];

// function App() {
//   const [data, setData] = useState<DataRow[]>([]);

//   useEffect(() => {
//     fetch('/data.json')
//       .then((res) => res.json())
//       .then((fetchedData) => setData(fetchedData))
//       .catch((error) => console.error("Failed to load data", error));
//   }, []);
const data: DataRow[] = importedData;

function App() {

  return (
    <div className="App">
      <div className="header-container">
        <h1 className="App-header">Identity Product Listing</h1>
        <a href="https://github.com/iamabrom/identity-Product-Listing" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/stars/iamAbrom/identity-Product-Listing?style=social&label=Contribute%20to%20this%20listing" className="top-link" />
        </a>
      </div>
        {/* @ts-expect-error */}
        <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
