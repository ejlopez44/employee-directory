import React from 'react';
import './style.css';
function TableHeader(props) {
    return (
        <thead>
            <tr className="">
                {/* <th scope="col">#</th> */}
                <th scope="col">Photo</th>
                <th id="lastNM" className="sortBtn" onClick={() => props.sortTable('lastName')} scope="col">Name</th>
                <th className="sortBtn" onClick={() => props.sortTable('phone')} scope="col">Phone</th>
                <th className="sortBtn" onClick={() => props.sortTable('email')} scope="col">Email</th>
                <th className="sortBtn" onClick={() => props.sortTable('dob')} scope="col">DOB</th>
            </tr>
        </thead>
    )
}

export default TableHeader;