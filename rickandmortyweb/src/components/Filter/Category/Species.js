import React, { useState } from 'react';
import FilterButton from '../FilterButton';

const Species = ({ setPageNumber, setSpecies }) => {
  const [selectedFilter, setSelectedFilter] = useState(null); // Track active filter
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological Creature",
    "unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ];

  const updateSpecies = (newSpecies) => {
    if (selectedFilter === newSpecies) {
      // Deselect filter if clicked again
      setSelectedFilter(null);
      setSpecies(""); // Clear the species filter globally
    } else {
      setSelectedFilter(newSpecies);
      setSpecies(newSpecies); // Update the global species filter
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
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Tür
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {species.map((items, index) => (
            <FilterButton
              key={index}
              name="species"
              index={index}
              items={items}
              task={updateSpecies} // Call updateSpecies instead of setSpecies directly
              setPageNumber={setPageNumber}
              isActive={selectedFilter === items} // Determine if this filter is active
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
