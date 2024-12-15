import React from 'react'

const FilterButton = ({name,index,items, task, setPageNumber,isActive  }) => {
    //Bootstrapt Radios'tan alınan kod. 3 farklı filtre componentinin içerisindeki butonlar olarak kullanılıyor.
    // {`${name}-${index}`} dinamik olarak tek bir butonu tekrar yaratıp isim ve indeksini mapten alıp güncelliyor.
return (
    <div>
      <style jsx>
        {`
          .active {
            background-color: #0b5ed7;
            color: white !important;
          }
        
          input[type="radio"]{
                     display: none;
                 }
        `}
      </style>

      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />

        <label
          className={`btn btn-outline-primary ${isActive ? 'active' : ''}`} // Dynamically add active class
          htmlFor={`${name}-${index}`}
        >
          {items}
        </label>
      </div>
    </div>
  );
}

export default FilterButton