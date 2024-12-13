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

  let {info,results} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
 
 
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
        <div className="col-3">
          <Filters></Filters>
        </div>
        <div className="col-8">
        <div className="row">
          <Cards results={results}></Cards>
        </div>
        </div>
      </div>
    </div>

    <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}></Pagination>  
  </div>
   
  );
}

export default App;
