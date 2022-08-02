import React, { useState, useEffect } from 'react';
import FarmerListTable from './components/FarmerListTable/FarmerListTable';
import FarmerSearchBar from './components/FarmerSearchBar/FarmerSearchBar';
import FarmerSearchDropdown from './components/FarmerSearchDropdown/FarmerSearchDropdown';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const column = [
    { id: 1, heading: 'Farmer Name', value: 'farmer_name' },
    { id: 2, heading: 'City', value: 'city' },
    { id: 3, heading: 'State', value: 'state' },
    { id: 4, heading: 'Crop Protection Spend', value: 'cp_spend' },
    { id: 5, heading: 'Seed (Bags)', value: 'seed_purchases' },
  ]
  const getData = () => {
    setIsLoading(true);
    fetch('farmers.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.data);
        setIsLoading(false);
        setFilteredData(myJson.data);
      });
  }
  useEffect(() => {
    getData()
  }, [])


  const handleSetData = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <div className="container">
      <div>
        <h1 className='text-center'>Farmers Details</h1>
      </div>
      <div>
        <div className='global_filter'>
          <div>
            <FarmerSearchDropdown data={data} handleSetData={handleSetData} />
          </div>
          <div>
            <FarmerSearchBar data={data} handleSetData={handleSetData} />
          </div>
        </div>
        <FarmerListTable rows={filteredData} columns={column} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
