import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${styles['nav-button']} ${currentPage === 1 ? styles.disabled : ""}`}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`${styles['page-button']} ${currentPage === index + 1 ? styles.active : ""}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${styles['nav-button']} ${currentPage === totalPages ? styles.disabled : ""}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
