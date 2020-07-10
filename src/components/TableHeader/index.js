import React from 'react';

function TableHeader(props) {
    return (
        <thead>
            <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Photo</th>
                <th onClick={() => props.sortTable('name')} scope="col">Name</th>
                <th onClick={() => props.sortTable('phone')} scope="col">Phone</th>
                <th onClick={() => props.sortTable('email')} scope="col">Email</th>
                <th onClick={() => props.sortTable('dob')} scope="col">DOB</th>
            </tr>
        </thead>
    )
}

export default TableHeader;