import React from "react";
import { Row, Col } from "../Grid";

const SavedResults = props => {
    return (props.savedBooks === 0 ) ? (
        <div className="card">
            <div className="card-body">
                <h3>Saved Books</h3>
            </div>
        </div>
    ): (
        <div className="card">
            <div className="card-body">
                <h3>Saved Books</h3>
                {props.savedBooks.map(savedBooks => {
                    return(
                        <li className="list-group-item">
                                <Row id={savedBooks.title + "Card"} key={savedBooks._id}>
                                    
                                    <Col size="3">
                                        <img src={savedBooks.image} alt={savedBooks.title} />
                                    </Col>
                                    <Col size="1"/>
                                    
                                    <Col size="9">
                                        <Row>
                                            <h2>{savedBooks.title}</h2>
                                        </Row>
                                        <Row>
                                            <h4>{savedBooks.author}</h4>
                                        </Row>
                                        <Row>
                                            <p>{savedBooks.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <a target="_blank" rel="noopener noreferrer" href={savedBooks.link}>
                                        
                                        <button className="btn btn-success">
                                            View
                                        </button>
                                    </a>
                                    
                                    <button className="btn btn-danger" id={savedBooks._id} onClick={() => props.handleDeleteBook(savedBooks._id)}>
                                        Delete
                                    </button>
                                    
                                </Row>
                            </li>
                    )
                })}
            </div>
        </div>
    )
}
export default SavedResults