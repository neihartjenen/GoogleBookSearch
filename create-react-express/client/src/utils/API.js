import axios from "axios";

export default {
    getGoogleSearchBooks: function (bookNames){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookNames);
    },
    
    saveBook: function(bookData){
        return axios.post("/api/books/", bookData);
    },

    getBooks: function() {
        return axios.get("/api/books");
    },
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    }
}