// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap"
// import Filters from './components/Filter/Filters';
// import Cards from './components/Cards/Cards';
// import React,{ useState , useEffect} from 'react';
// import Pagination from './components/Pagination/Pagination';
// import Search from './components/Search/Search';


// function App() {

//   const [pageNumber, setPageNumber] = useState(1)
//   const [fetchedData, setFetchedData] = useState([])
//   const [search, setSearch] = useState("")
//   const [status, setStatus] = useState("")
//   const [gender, setGender] = useState("")
//   const [species, setSpecies] = useState("")

//   let {info,results} = fetchedData;

//   //base url
//   let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
 
//   // api'a sürekli istek atan yaşam döngüsü parçası
//   useEffect(()=>{
//     (async function(){
//       let data = await fetch(api).then(res=>res.json());
//       setFetchedData(data)
//     })()
//   },[api])

//   return (
//    <div className="App">
//     <h1 className="text-center ubuntu my-5">Rick & Morty <span className="text-primary "> API</span></h1>

//     <Search setPageNumber={setPageNumber} setSearch={setSearch}></Search>

//     <div className = "container">
//       <div className="row">
        
//           <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}></Filters>

//         <div className="col-8">
//         <div className="row">
//           {results? (
//             <Cards data={results}></Cards>

//           ) :
//           (
//             <div/>
//           )}
          
//         </div>
//         </div>
//       </div>
//     </div>

//     <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} ></Pagination>  
//   </div>
   
//   );
// }

// export default App;


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from './components/Filter/Filters';
import Cards from './components/Cards/Cards';
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [filteredData, setFilteredData] = useState([]); // Data for pagination
  

  const itemsPerPage = 250; // Number of items per page

  // Base API URL
  let api = `https://rickandmortyapi.com/api/character/?page=1&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  // Fetch all characters
  useEffect(() => {
    const fetchAllData = async () => {
      let allData = [];
      let page = 1;
      let hasNextPage = true;

      while (hasNextPage) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`);
        const data = await response.json();

        // allData = [...allData, ...data.results];
        // hasNextPage = data.info.next !== null;
        if (data && data.results) {
          allData = [...allData, ...data.results];
          hasNextPage = data.info.next !== null;
        } else {
          //console.log('API response is missing results:', data);
          break;
        }
        page++;
      }
      setFetchedData(allData); // Store all fetched data
    };

    fetchAllData();
  }, [search, status, gender, species]);

  // Apply client-side pagination
  const currentItems = filteredData.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
  };

  // Filter data on fetch
  useEffect(() => {
    // Filtreleme işlemini useEffect içinde yapıyoruz
    let filtered = fetchedData;
  
    if (status) {
      filtered = filtered.filter((item) => item.status === status);
    }
    if (gender) {
      filtered = filtered.filter((item) => item.gender === gender);
    }
    if (species) {
      filtered = filtered.filter((item) => item.species === species);
    }
  
    // Sonuçları setFilteredData'ya atıyoruz
    setFilteredData(filtered);
  }, [fetchedData, status, gender, species]);

  // Total number of pages for pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-5">Rick & Morty <span className="text-primary "> API</span></h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        currentPage={pageNumber}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />

      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
          />
          <div className="col-8">
            <div className="row">
              {currentItems.length > 0 ? (
                <Cards data={currentItems} />
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

