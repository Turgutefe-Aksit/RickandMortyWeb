import React from 'react'
import FilterButton from '../FilterButton'

const Status = ({setStatus,setPageNumber}) => {

  let status = ["Alive","Dead","Unknow"];

  //Bootstrap Accordion dökümantasyonundan alınan kod parçası. Kodu Componentlere bölerek kod temizliği sağlandı.
  return (
    <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            Durum
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap gap-2">
            {status.map((items,index)=>(
              <FilterButton key={index} name="status" index={index} items={items} setPageNumber={setPageNumber} task={setStatus}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Status