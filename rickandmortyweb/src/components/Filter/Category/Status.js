import React from 'react'
import FilterButton from '../FilterButton'

const Status = () => {
  let status = ["Canlı","Ölü","Bilinmiyor"];
  //Bootstrap Accordion dökümantasyonundan alınan kod parçası. Kodu Componentlere bölerek kod temizliği sağlandı.
  return (
    <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Durum
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap gap-2">
            {status.map((items,index)=>(
              <FilterButton key={index} name="status" index={index} items={items}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Status