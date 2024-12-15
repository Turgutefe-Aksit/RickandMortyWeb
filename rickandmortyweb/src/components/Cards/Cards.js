import React from 'react';
import styles from "./Cards.module.scss";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

const Cards = ({ data, onCharacterClick, selectedCharacter }) => {

  const [sorting, setSorting] = React.useState([]);
  const columnHelper = createColumnHelper();
  
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('image', {
      header: 'Avatar',
      cell: (info) => (
        <img
          src={info.getValue()}
          alt="Character Avatar"
          style={{ width: '50px', borderRadius: '50%' }}
        />
      ),
    }),
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => info.getValue(),
      sortingFn: 'text', // Sorting based on text
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('species', {
      header: 'Species',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('gender', {
      header: 'Gender',
      cell: (info) => info.getValue(),
    }),
  ];

  // Create the table instance
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), // Enable sorting
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Rick and Morty Characters</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #ddd' }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    padding: '8px',
                    textAlign: 'left',
                    backgroundColor: '#f2f2f2',
                    borderBottom: '1px solid #ddd',
                    cursor: header.column.getCanSort() ? 'pointer' : 'default',
                  }}
                  onClick={header.column.getToggleSortingHandler()} // Enable sorting on header click
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted()] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            const character = row.original;
            const isSelected = selectedCharacter?.id === character.id;
            return (
              <React.Fragment key={row.id}>
                <tr
                  onClick={() => onCharacterClick(character)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: isSelected ? '#f0f0f0' : 'transparent',
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
                {isSelected && (
                  <tr>
                    <td colSpan="8" style={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
                      <h5>Character Details:</h5>
                      <p><strong>Name:</strong> {character.name}</p>
                      <p><strong>Status:</strong> {character.status}</p>
                      <p><strong>Species:</strong> {character.species}</p>
                      <p><strong>Gender:</strong> {character.gender}</p>
                      <p><strong>Origin:</strong> {character.origin.name}</p>
                      <p><strong>Location:</strong> {character.location.name}</p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cards;
