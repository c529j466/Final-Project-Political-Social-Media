
import React from "react";
import './search.css'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function Search() {
    return (


        <div className="contain">
            <h1>SEARCH FOR LOCAL POLITICANS NEAR YOU</h1>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="SEARCH BY CITY STATE OR DISTRICT" aria-label="Search"></input>
                <button class="btn btn-outline-dark" type="submit">Search</button>
            </form>
        </div>
    )
};
export default Search;