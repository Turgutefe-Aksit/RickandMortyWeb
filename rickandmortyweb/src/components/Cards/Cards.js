import React from 'react'
import styles from "./Cards.module.scss"
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

const Cards = ({data}) => {

  // let display;
  // if(results){
  //   display = results.map(item =>{
  //     return( <div key={item.id} className='col-4 mb-4 position-relative'>
  //       <div className={styles.cards}>
  //         <img src={item.image} alt='' className={`${styles.img} img-fluid`}></img>
  //         <div style={{padding:"10px"}} className='content'> 
  //           <div className='fs-4 fw-bold mb-4'>{item.name}</div>
  //           <div className=''>
  //             <div>
  //             <div className='fs-6'>Son Konum</div>
  //             <div className='fs-5'>{item.location.name}</div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       {(()=>{
  //         if(item.status === "Alive"){
  //           return(
  //             <div className={`${styles.badge} position-absolute badge text-bg-success`} >Canlı</div>
  //           );
  //         }
  //         else if(item.status === "Dead"){
  //           return(
  //             <div className={`${styles.badge} position-absolute badge text-bg-danger`} >Ölü</div>
  //           );
  //         }
  //         else{
  //           return(
  //             <div className={`${styles.badge} position-absolute badge text-bg-secondary`} >Bilinmiyor</div>
  //           );
  //         }
  //       })()}
        
  //     </div>)
  //   })
  // }
  // else{
  //   display = "Karakter Bulunamadı" 
  // }
  // return (
  //   < >{display}</>
  // )

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
    columnHelper.accessor('origin.name', {
      header: 'Origin',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('location.name', {
      header: 'Location',
      cell: (info) => info.getValue(),
    }),
  ];

  // Create the table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{ padding: '8px', borderBottom: '1px solid #ddd' }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default Cards