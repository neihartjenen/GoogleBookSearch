import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"


const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="searchPageTitle">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body">
                    <div className="searchPageTitle">
                        <h3>Search Results</h3>
                        {props.books.map(book => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row className="search-result row" id={book.title + "Card"} key={book._id}>
                                        
                                        <Col size="3">
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        
                                        
                                        <Col size="9">
                                            <Row>
                                                <h3>{book.title}</h3>
                                            </Row>

                                            <Row>
                                                <h4>{book.author}</h4>
                                            </Row>
                                            
                                            <Row>
                                                <p>{book.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <button className="btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save
                                        </button>
                                        <a target="_blank" rel="noopener noreferrer" href={book.link}>
                                            <button className="btn btn-success">
                                                View
                                        </button>
                                        </a>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult