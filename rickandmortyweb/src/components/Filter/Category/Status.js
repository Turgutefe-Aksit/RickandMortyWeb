// import React,{useState} from 'react'
// import FilterButton from '../FilterButton'

// const Status = ({setPageNumber}) => {

//   const [selectedFilter, setSelectedFilter] = useState(null); // Track active filter
//   const [status, setStatus] = useState(""); // Example API filter
//   let filters = ["Alive","Dead","Unknown"];
  

//   const updateStatus = (newStatus) => {
//     if (selectedFilter === newStatus) {
//       // Deselect filter if clicked again
//       setSelectedFilter(null);
//       setStatus('');
//     } else {
//       setSelectedFilter(newStatus);
//       setStatus(newStatus);
//     }
//   };

//   //Bootstrap Accordion dökümantasyonundan alınan kod parçası. Kodu Componentlere bölerek kod temizliği sağlandı.
//   return (

//     <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
//             Durum
//           </button>
//         </h2>
//         <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//           <div className="accordion-body d-flex flex-wrap gap-2">
//             {filters.map((items,index)=>(
//               <FilterButton key={index} name="status" index={index} items={items} setPageNumber={setPageNumber} task={updateStatus}  isActive={selectedFilter === items} />
//             ))}
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Status

import React, { useState } from 'react';
import FilterButton from '../FilterButton';

const Status = ({ setPageNumber, setStatus }) => {
  const [selectedFilter, setSelectedFilter] = useState(null); // Track active filter
  let filters = ["Alive", "Dead", "unknown"];

  const updateStatus = (newStatus) => {
    if (selectedFilter === newStatus) {
      // Deselect filter if clicked again
      setSelectedFilter(null);
      setStatus(""); // Clear the status filter globally
    } else {
      setSelectedFilter(newStatus);
      setStatus(newStatus); // Update the global status filter
    }
    setPageNumber(1); // Reset pagination
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          Statu
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {filters.map((items, index) => (
            <FilterButton
              key={index}
              name="status"
              index={index}
              items={items}
              setPageNumber={setPageNumber}
              task={updateStatus}
              isActive={selectedFilter === items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
