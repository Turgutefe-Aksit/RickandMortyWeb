import React from 'react'

const FilterButton = ({name,index,items}) => {
    //Bootstrapt Radios'tan alınan kod. 3 farklı filtre componentinin içerisindeki butonlar olarak kullanılıyor.
    // {`${name}-${index}`} dinamik olarak tek bir butonu tekrar yaratıp isim ve indeksini mapten alıp güncelliyor.
    // color: white !important; seçili butonun yazısı silik görünmemesi için.
  return (
    <div>
        <style jsx>
            {`
                .x:checked + label{
                    background-color: #0b5ed7;
                    color: white !important; 
                }

                input[type="radio"]{
                    display: none;
                }`
            }
        </style>

        <div className="form-check">
        <input className="form-check-input x" type="radio" name={name} id={`${name}-${index}`}/>

        <label class="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>

        </div>
    </div>
  )
}

export default FilterButton