import React from 'react';
// import Search from '../Search'
function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Employee Directory</span>
            {/* <Search handleInputChange={props.handleInputChange}/> */}
            <form onSubmit={props.ignoreSubmit} className="form-inline">
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
        </nav>
    )
}

export default Header;
