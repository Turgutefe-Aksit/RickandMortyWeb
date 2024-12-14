import React from 'react'
import styles from "./Cards.module.scss"

const Cards = ({results}) => {

  let display;
  if(results){
    display = results.map(item =>{
      return( <div key={item.id} className='col-4 mb-4 position-relative'>
        <div className={styles.cards}>
          <img src={item.image} alt='' className={`${styles.img} img-fluid`}></img>
          <div style={{padding:"10px"}} className='content'> 
            <div className='fs-4 fw-bold mb-4'>{item.name}</div>
            <div className=''>
              <div>
              <div className='fs-6'>Son Konum</div>
              <div className='fs-5'>{item.location.name}</div>
              </div>
            </div>
          </div>
        </div>
        {(()=>{
          if(item.status === "Alive"){
            return(
              <div className={`${styles.badge} position-absolute badge text-bg-success`} >Canlı</div>
            );
          }
          else if(item.status === "Dead"){
            return(
              <div className={`${styles.badge} position-absolute badge text-bg-danger`} >Ölü</div>
            );
          }
          else{
            return(
              <div className={`${styles.badge} position-absolute badge text-bg-secondary`} >Bilinmiyor</div>
            );
          }
        })()}
        
      </div>)
    })
  }
  else{
    display = "Karakter Bulunamadı" 
  }
  return (
    < >{display}</>
  )
}

export default Cards