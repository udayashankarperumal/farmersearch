import React, { useState } from 'react';
import './FarmerSearchBar.css';

const FarmerSearchBar = (props) => {
    const [query, setQuery] = useState("");

    // console.log(props.data)

    const handleChange = searchString => {
        setQuery(searchString);
        globalSearch(searchString);
    }
    const globalSearch = (searchString) => {
        let filteredData = props.data.filter(value => {
            return (
                value.farmer_name.toLowerCase().includes(searchString.toLowerCase()) || value.city.toLowerCase().includes(searchString.toLowerCase())
            );
        });
        props.handleSetData(filteredData);
    }
    return (
        <>
            <div className='inputField search'>
                <input type="text" value={query} onChange={(e) => handleChange(e.target.value)} placeholder="Name, City" />
            </div>
        </>
    );
}

export default FarmerSearchBar;