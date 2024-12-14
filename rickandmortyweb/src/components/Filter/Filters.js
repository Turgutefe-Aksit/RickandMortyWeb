import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = () => {
  //Bootstrap Accordion dökümantasyonundan alınan kod parçası. accordion kısmını 3 farklı componente bölerek componentleri accordion'a vermek daha temiz bir kod yapısı.
  return (
    <div className='col-3'>
      <div className='text-center fw-bold fs-4 mb-2'>Filtre</div>
      <div style={{cursor: "pointer"}} className='text-center text-primary text-decoration-underline mb-4'>Filtreleri Temzile</div>

      
      <div className="accordion" id="accordionExample">
        <Status></Status>
        <Species></Species>
        <Gender></Gender>
      </div>
    </div>
  )
}

export default Filters