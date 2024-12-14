import React from 'react';

function Dropdown({ onItemsPerPageChange }) {
  const handleChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    onItemsPerPageChange(selectedValue);
  };

  return (
    <div className="dropdown">
      <label htmlFor="itemsPerPage" className="form-label">Items per page:</label>
      <select id="itemsPerPage" className="form-select" onChange={handleChange}>
        <option value="50">50</option>
        <option value="150">150</option>
        <option value="250">250</option>
      </select>
    </div>
  );
}

export default Dropdown;
