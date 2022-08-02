import React, { useState } from 'react';
import './FarmerListTable.css';

const FarmerListTable = ({ isLoading, columns, rows }) => {
    if (isLoading) {
        return <div>Loading..</div>
    }

    return (
        <>
            <div className="results">
                <p>Results: {rows.length}</p>
            </div>
            <table className='table-responsive'>
                <thead>
                    <tr>
                        {columns.map((item, index) => <TableHeadItem indexVal={index} item={item} />)}
                    </tr>
                </thead>
                <tbody>
                    {rows.length > 0 ? rows.map((item, index) => <TableRow indexVal={index} item={item} column={columns} />) : <tr><td colSpan={columns.length} className="text-center">No records found</td></tr>}

                </tbody>
            </table>
        </>
    )
}



const TableHeadItem = ({ indexVal, item }) => (
    <th key={indexVal} className={(item.value == "cp_spend" ? ' text-right' : '')}>
        <div>
            <div>{item.heading}</div>
        </div>

    </th >
);
const TableRow = ({ indexVal, item, column }) => (
    <tr key={indexVal}>
        {column.map((columnItem, index) => {
            if (columnItem.value == "cp_spend") {
                return <td className='text-right' key={index}>{'$' + item[`${columnItem.value}`].toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
            } else {
                return <td key={index}>{item[`${columnItem.value}`]}</td>
            }
        })}
    </tr>
)



export default FarmerListTable