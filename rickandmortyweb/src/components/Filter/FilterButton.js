import React from 'react'

const FilterButton = ({name,index,items, task, setPageNumber }) => {
    //Bootstrapt Radios'tan alınan kod. 3 farklı filtre componentinin içerisindeki butonlar olarak kullanılıyor.
    // {`${name}-${index}`} dinamik olarak tek bir butonu tekrar yaratıp isim ve indeksini mapten alıp güncelliyor.
    // color: white !important; seçili butonun yazısı silik görünmemesi için.
    //task propu ile app.js içerisindeki API url'de bulunan status update ediliyor(filtreleme için).
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
        <input 
            onClick={() =>{
                setPageNumber(1);
                task(items);
            }}
            className="form-check-input x" 
            type="radio" name={name} 
            id={`${name}-${index}`}/>

        <label class="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>

        </div>
    </div>
  )
}

export default FilterButton