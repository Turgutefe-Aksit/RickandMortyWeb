import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from './components/Filter/Filters';
import Cards from './components/Cards/Cards';
import React,{ useState , useEffect} from 'react';


function App() {

  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, setFetchedData] = useState([])
  let {info,results} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
 
 
  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setFetchedData(data)
    })()
  },[api])

  return (
   <div className="App">
    <h1 className="text-center ubuntu my-5">Rick & Morty <span className="text-primary "> API</span></h1>
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
  </div>
   
  );
}

export default App;
