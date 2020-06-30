import React, { Component } from "react";
import NavBar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Form from "../components/form";
import {Container, Col, Row} from "../components/Grid"
import API from "../utils/API" 

class Search extends Component{
    state={
        books: [],
        search: "",
    }; 
    
    


    handleFormSubmit = event => {
        console.log("event is happening")
        event.preventDefault();
        API.getBooks((this.state.search))
        .then( data=> console.log(data)) 
        .catch(err=> console.log(err))
    }

    render() {
        return ( 
            <Container fluid>
                <NavBar/>
                <Jumbotron/>
                <Row>
                    <Col size="lg-12">
                        <form className="border border-dark"
                            onSubmit={() => this.handleFormSubmit}>
                            <div>
                            <div style={{marginLeft:"10px",marginBottom:"5px",marginTop:"10px"}}>Book Search</div>
                            <div style={{fontSize:"13px", marginLeft:"10px",marginBottom:"10px",marginTop:"5px"}}>Book</div>
                            
                            </div>
                            <Form/>
                        </form>
                        
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Search;