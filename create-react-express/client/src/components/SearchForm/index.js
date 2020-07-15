import React from "react";

const Search = props => {
    return (
        <form>
            <div className="form-group">
                <label className="book-label"><h3>Search for Book</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Enter Book's Name"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary submit-btn" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default Search