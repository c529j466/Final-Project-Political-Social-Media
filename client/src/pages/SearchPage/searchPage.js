
import React from "react";
import './search.css'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function Search() {
    return (


        <div className="contain">
            <h1>SEARCH FOR LOCAL POLITICANS NEAR YOU</h1>
            <form role="search">
                <input className="form-control me-2" type="search" placeholder="SEARCH BY CITY STATE OR DISTRICT" aria-label="Search"></input>
                <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
        </div>
    )
};
export default Search;