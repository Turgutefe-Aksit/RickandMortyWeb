import React from "react";
import styles from "./Pagination.module.scss"

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination justify-content-center gap-3 my-3">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{backgroundColor:"#4bf16e"}}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          style={{backgroundColor: "#0d9afe" , color:"white", borderRadius:"45px", height:40,width:40}}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{backgroundColor:"#4bf16e"}}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;