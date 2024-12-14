import React from 'react'
import FilterButton from '../FilterButton'

const Gender = ({setGender,setPageNumber}) => {
  let genders = ["female", "male", "genderless", "unknow"]
  //Bootstrap Accordion dökümantasyonundan alınan kod parçası. Kodu Componentlere bölerek kod temizliği sağlandı.
  return (
    <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Cinsiyet
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap gap-2">
            {genders.map((items,index)=>(
              <FilterButton key={index} name="gender" index={index} items={items} setPageNumber={setPageNumber} task={setGender}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Gender