import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from './components/Filter/Filters';
import Cards from './components/Cards/Cards';
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Dropdown from './components/Dropdown/Dropdown';
import { fetchAllData } from './api/api';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [filteredData, setFilteredData] = useState([]); 
  const [itemsPerPage, setItemsPerPage] = useState(250); 
  const [selectedCharacter, setSelectedCharacter] = useState(null); 
  const [loading, setLoading] = useState(true);

  // Tüm karakterleri getirmek için Api.
  useEffect(() => {
    const getData = async () => {
      const data = await fetchAllData({ search, status, gender, species });
      setFetchedData(data);
      setLoading(false);
    };
    getData();
  }, [search, status, gender, species]);

  // Client tarafında sayfalama işlemi.
  const currentItems = filteredData.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
  };

  // Gelen veriyi filtreleme için
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

  // Sayfa başına öğe sayısını güncelleme
  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setPageNumber(1); 
  };

  // Toplam sayfa sayısı
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(selectedCharacter?.id === character.id ? null : character); 
  };

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

          <div className="col-7">
            <div className="row">
            {currentItems.length > 0 ? (
              <Cards 
                data={currentItems} 
                onCharacterClick={handleCharacterClick} 
                selectedCharacter={selectedCharacter} 
              />
            ) : (
              loading ? (
                <Skeleton count={20}/>
              ) : (
                <div>Character not Found.</div>
              )
            )}
            </div>
          </div>
          
          <div className="col-2">
            <Dropdown onItemsPerPageChange={handleItemsPerPageChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
