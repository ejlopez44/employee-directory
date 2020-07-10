import React from 'react';

function Search(props) {
    return (
        <form className="form-inline">
            <input
                value={props.search}
                onChange={props.handleInputChange}
                className="form-control mr-sm-2"
                // type="search" 
                type="text"
                placeholder="Filter by name"
            // aria-label="Search">
            />
        </form >
    )
}

export default Search;
