import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import "./style.css"
import {Container, Col, Row} from "../components/Grid"
import API from "../utils/API" 
import NavBar from "../components/navbar"
import SavedResults from "../components/SavedResults"

class Saved extends Component{
    state={
        savedBooks: [],
    }; 
    componentDidMount(){
        API.getBooks()
        .then(res => this.setState({ savedBooks: res.data }))
        .catch(err => console.log(err))
    }

    handleDeleteBook = id => {
        console.log(id)
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err=> console.log(err));
    }
render() {
    return ( 
        <div>
        <Container fluid className="container">
            <NavBar/>
            <Jumbotron/>
            <Row>
                <Col size="lg-12">
                <SavedResults savedBooks={this.state.savedBooks} handleDeleteBook={this.handleDeleteBook} />
                </Col>
            </Row>
        </Container>
        </div>
    );
}
}
export default Saved;