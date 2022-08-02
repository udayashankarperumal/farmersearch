import React, { useState } from 'react';
import './FarmerSearchDropdown.css';

const FarmerSearchDropdown = (props) => {
    const handleChange = event => {
        console.log(event.target.value)
        let filteredData = props.data.filter(value => {
            return (
                value.state.toLowerCase().includes(event.target.value.toLowerCase())
            );
        });
        props.handleSetData(filteredData);
    }
    return (
        <>
            <div className='inputField'>
                <select onChange={handleChange}>
                    <option>State</option>
                    {props.data.map((value, index) => <option key={index} value={value.state} >{value.state}</option>)}
                </select>
            </div>
        </>
    );
}


export default FarmerSearchDropdown;