import React, { Component } from "react";
import NavBar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import {Container, Col, Row} from "../components/Grid";
import API from "../utils/API";


class Search extends Component{
    state={
        search: "",
        books: [],
        message:""
    }; 
    
    

    handleInputChange = event => {
        
        this.setState({
          search: event.target.value
        });
        
      };

    handleFormSubmit = event => {
        // console.log("event is happening")
        event.preventDefault();
        // console.log(this.state.search)

        API.getGoogleSearchBooks((this.state.search))
        .then( res => {
            //  console.log(res.data.items)
            var results = res.data.items
                
                results = results.map(result => {
                    result = {
                        
                        id: result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.smallThumbnail,
                        link: result.volumeInfo.infoLink
                    }
                return result;
                })

            this.setState({books: results})
            
        }).catch(err=> console.log(err))
    }

    handleSavedButton = event => {
        event.preventDefault();
        // console.log(this.state.books)

        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];

        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your has book been saved") }))
            .catch(err => console.log(err))
    }

    render() {
        return ( 
            <Container fluid>
                <NavBar/>
                <Jumbotron/>
                <Row>
                    <Col size="lg-12">
                        <SearchForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}  />
                    </Col>
                </Row>
                <Row>
                    <SearchResults books={this.state.books} handleSavedButton={this.handleSavedButton}></SearchResults>
                </Row>
            </Container>
            
                
            
        );
    }

}

export default Search;