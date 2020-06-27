import React from 'react';
import {Container, Col, Row} from "../Grid";
import "./style.css";

// Title 
// optional subtitle
// Author
// Image
// Description
// view button (preview link)
// Saved button (adds to saved database)


function Card({props}) {
    console.log(props);
    return(
        <Container>
            <Row>
                <Col size="lg-12">
                    <Row>
                        <Col size="lg-12">
                            <Row>
                                <h2 id="title">{props.volumeInfo.title}</h2>
                                <button href={props.volumeInfo.previewLink} id="viewbtn">View</button>
                                <button id="savebtn">Save</button>
                            </Row>
                            <Row>
                                <p>{props.volumeInfo.subtitle}</p>
                            </Row>
                            <Row>
                                <p>{props.volumeInfo.authors}</p>
                            </Row>
                        </Col>
                        
                    </Row>
                    <Row>
                        {/* Book Image */}
                        <Col size="lg-4">
                            <img src={props.volumeInfo.imageLinks.smallThumbnail}></img>
                        </Col>
                        {/* description */}
                        <Col size="lg-8">
                            <p>{props.volumeInfo.description}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Card;