import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from './components/Filter/Filters';
import Cards from './components/Cards/Cards';
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [filteredData, setFilteredData] = useState([]); // Data for pagination
  const [itemsPerPage, setItemsPerPage] = useState(250); // State to store items per page

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

        if (data && data.results) {
          allData = [...allData, ...data.results];
          hasNextPage = data.info.next !== null;
        } else {
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
  
    setFilteredData(filtered);
  }, [fetchedData, status, gender, species]);

  // Update the number of items per page
  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setPageNumber(1); // Reset to the first page when items per page change
  };

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

          <div className="col-1">
            <Dropdown onItemsPerPageChange={handleItemsPerPageChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


