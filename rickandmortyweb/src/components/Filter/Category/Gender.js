import React from 'react'
import FilterButton from '../FilterButton'

const Gender = () => {
  let genders = ["Kadın", "Erkek", "Cinsiyetsiz", "Bilinmiyor"]
  //Bootstrap Accordion dökümantasyonundan alınan kod parçası. Kodu Componentlere bölerek kod temizliği sağlandı.
  return (
    <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Cinsiyet
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap gap-2">
            {genders.map((items,index)=>(
              <FilterButton key={index} name="gender" index={index} items={items}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Gender