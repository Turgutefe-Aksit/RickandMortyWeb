import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

//Propları alt komponente verebilmek için fileteri aracı olarak kullanıyoruz.
const Filters = ({setGender,setStatus,setPageNumber,setSpecies}) => {

  //Api URL'e verilen state'leri temizleyerek filtreleri silme fonksiyonu
  let clear = () =>{
    setGender("");
    setStatus("");
    setPageNumber(1);
    setSpecies("");
    //window.location.reload(false)
  }

  //Bootstrap Accordion dökümantasyonundan alınan kod parçası. accordion kısmını 3 farklı componente bölerek componentleri accordion'a vermek daha temiz bir kod yapısı.
  return (
    <div className='col-3'>
      <div className='text-center fw-bold fs-4 mb-2'>Filtre</div>
      <div 
        onClick={clear}
        style={{cursor: "pointer"}} 
        className='text-center text-primary text-decoration-underline mb-4'>
          Filtreleri Temizle
      </div>

      
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} ></Status>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies}></Species>
        <Gender setPageNumber={setPageNumber} setGender={setGender}></Gender>
      </div>
    </div>
  )
}

export default Filters