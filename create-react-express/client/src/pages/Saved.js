import React, { Component } from "react";
import NavBar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import "./style.css"
import Form from "../components/form";
import {Container, Col, Row} from "../components/Grid"
import API from "../utils/API" 
import Card from "../components/card"
class Saved extends Component{
    state={
        savedBooks: [],
    }; 
componentDidMount(){
    API.savedBooks()
    .then(res => this.setState({ savedBooks: res.data }))
    .catch(err => console.log(err))
}
//getSavedBook
// deleteBook = id => {
//     API.deleteBook(id)
//     .then(res => this.state.savedBooks())
//     .catch(err=> console.log(err));
// }
render() {
    return ( 
        <Container fluid>
            <NavBar/>
            <Jumbotron/>
            <Row>
                <Col size="lg-12">
                {this.state.savedBooks.map(book => <Card props={book} btn={"Delete"}/>)}
                </Col>
            </Row>
        </Container>
    );
}
}
export default Saved;