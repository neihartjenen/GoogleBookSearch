import React from "react";
import API from "../../utils/API" 
import Card from "../card"

// export function Input({props}) {
//    return ( 
//     <div className="form-group">
//         <input className="form-control" style={{width:"90%", marginLeft:"10px"}} {...props}/>
//     </div>
//     )
// }

// export function SearchBtn({props, children}) {
//     return (
//             <input type="submit" search="submit"/>
//     )
// }

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        books: [],
        search: ''
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.search);
    event.preventDefault();
        API.getBooks((this.state.search))
        .then( res=> this.setState({books: res.data.items}))
        .catch(err=> console.log(err))
        console.log(this.state.books)
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name]:value,
    });
  };

  // savedBook = id => {
  //   API.saveBooks().then(res)
  // }

  // handleSaved = event => {
  //     event.preventDefault();  
  //     API.saveBooks({
  //         title: 
  //     })
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.search} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form>
         {this.state.books.map(book => <Card props={book}/>)} 
        </form>
      </div>
    );
  }
}

export default Form;