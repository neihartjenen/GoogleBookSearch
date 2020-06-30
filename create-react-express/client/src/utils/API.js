import axios from "axios";

export default {
    getBooks: function (bookNames){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookNames)
    },
    saveBooks: function(bookData){
        return axios.post("/api/books", bookData)
    },
    getSaved: function() {
        return axios.get("api/books");
    }
}