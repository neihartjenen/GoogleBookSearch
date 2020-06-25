import React, { Component } from "react";
import NavBar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import "./style.css"

class Saved extends Component{

    render() {
        return ( 
            <div>
            <NavBar/>
            <Jumbotron/>  
                <form className="border border-dark">
                    <p>Hello World</p>
                </form>
            </div>
        );
    }

}

export default Saved;