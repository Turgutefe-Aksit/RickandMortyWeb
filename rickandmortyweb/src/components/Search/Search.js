import React from 'react'
import styles from './Search.module.scss'

// setSearch ile inputa girilen veriye göre filtre uygulama
const Search = ({setSearch,setPageNumber}) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
        <input 
            placeholder='Search for Character' 
            type='text' 
            className={styles.input} 
            onChange={e=>{
                setPageNumber(1)
                setSearch(e.target.value);
            }}></input>
        {/* <button onClick={e=>{e.preventDefault();}} type="button" className={`${styles.btn} btn btn-primary fs-5`}>Search</button> */}
    </form>
  )
}

export default Search