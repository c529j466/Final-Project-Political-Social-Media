
import React from "react";
import './search.css'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Search() {
    return (
        <div className="container">
           <Card className='card-body'>
                <Card.Body>
                    <Card.Title><h3>Search for local politicians by entering a city, state, or district.</h3></Card.Title>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="City, State, or District" aria-label="Search"></input>
                        <button class="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )
};
export default Search;