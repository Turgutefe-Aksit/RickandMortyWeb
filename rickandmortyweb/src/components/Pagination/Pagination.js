import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from "./Pagination.module.scss"

const Pagination = ({setPageNumber,pageNumber,info}) => {
  //   let next = () =>{
  //       setPageNumber(x => x+1);
  //   };
  //   let prev = () =>{
  //       if(pageNumber === 1) return;
  //       setPageNumber(x => x-1);
  //   };
  // return (
  //   <div className='container d-flex justify-content-center gap-5 my-5'>
  //       <button onClick={prev} type="button" class="btn btn-primary">Önceki</button>
  //       <button onClick={next} type="button" class="btn btn-primary">Sonraki</button>
  //   </div>
  // )
  return(
    <ReactPaginate 
      className='pagination justify-content-center gap-4 my-4' 
      nextLabel = ">"
      previousLabel = "<"
      previousLinkClassName={`${styles.customColor} btn btn-success`}
      nextLinkClassName={`${styles.customColor} btn btn-success`}
      pageClassName='page-item'
      pageLinkClassName='page-link'
      //activeClassName={`${styles.active}`}
      activeClassName='active'

      forcePage={pageNumber ===1?0 : pageNumber-1}
      onPageChange={(data)=>{
        setPageNumber(data.selected + 1)
      }}
      pageCount={info?.pages}/>
  )
}

export default Pagination