// import React from 'react'
// import FilterButton from '../FilterButton'

// const Gender = ({setGender,setPageNumber}) => {
//   let genders = ["female", "male", "genderless", "unknown"]
//   //Bootstrap Accordion dökümantasyonundan alınan kod parçası. Kodu Componentlere bölerek kod temizliği sağlandı.
//   return (
//     <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
//             Cinsiyet
//           </button>
//         </h2>
//         <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
//           <div className="accordion-body d-flex flex-wrap gap-2">
//             {genders.map((items,index)=>(
//               <FilterButton key={index} name="gender" index={index} items={items} setPageNumber={setPageNumber} task={setGender}/>
//             ))}
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Gender

import React, { useState } from 'react';
import FilterButton from '../FilterButton';

const Gender = ({ setPageNumber, setGender }) => {
  const [selectedFilter, setSelectedFilter] = useState(null); // Track active filter
  const genders = ["Female", "Male", "Genderless", "unknown"];

  const updateGender = (newGender) => {
    if (selectedFilter === newGender) {
      // Deselect filter if clicked again
      setSelectedFilter(null);
      setGender(""); // Clear the gender filter globally
    } else {
      setSelectedFilter(newGender);
      setGender(newGender); // Update the global gender filter
    }
    setPageNumber(1); // Reset pagination
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {genders.map((items, index) => (
            <FilterButton
              key={index}
              name="gender"
              index={index}
              items={items}
              setPageNumber={setPageNumber}
              task={updateGender}
              isActive={selectedFilter === items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;