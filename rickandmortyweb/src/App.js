import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from './components/Filter/Filters';
import Cards from './components/Cards/Cards';
import React,{ useState , useEffect} from 'react';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';


function App() {

  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, setFetchedData] = useState([])
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")

  let {info,results} = fetchedData;

  //base url
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
 
  // api'a sürekli istek atan yaşam döngüsü parçası
  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setFetchedData(data)
    })()
  },[api])

  return (
   <div className="App">
    <h1 className="text-center ubuntu my-5">Rick & Morty <span className="text-primary "> API</span></h1>

    <Search setPageNumber={setPageNumber} setSearch={setSearch}></Search>

    <div className = "container">
      <div className="row">
        
          <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}></Filters>

        <div className="col-8">
        <div className="row">
          <Cards results={results}></Cards>
        </div>
        </div>
      </div>
    </div>

    <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} ></Pagination>  
  </div>
   
  );
}

export default App;
