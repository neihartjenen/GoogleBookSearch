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
        search: '',
        bookobj: {
          title: "",
          subtitle: "",
          authors: [],
          description: "",
          link: "",
          image: ""
        }
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hander = this.handler.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  handler = (id) => {
    console.log(id);

    this.state.books.map(book => {
      console.log(book);
        if(book.id === id){
          this.state.bookobj.title = book.volumeInfo.title;
          this.state.bookobj.subtitle = book.volumeInfo.subtitle;
          this.state.bookobj.authors = book.volumeInfo.authors;
          this.state.bookobj.description = book.volumeInfo.description;
          this.state.bookobj.link = book.volumeInfo.previewlink;
          this.state.bookobj.image = book.volumeInfo.imageLinks.smallThumbnail;
          console.log(this.state.bookobj);
        }
    })

    API.saveBooks((this.state.bookobj))
    .then()
    .catch(err => console.log(err))

  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.search);
    event.preventDefault();
        API.getBooks((this.state.search))
        .then( res=> this.setState({books: res.data.items}))
        .catch(err=> console.log(err))
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
        <div style={{marginLeft:"10px",marginBottom:"5px",marginTop:"10px"}}>Book Search</div>
          <div style={{fontSize:"13px", marginLeft:"10px",marginBottom:"10px",marginTop:"5px"}}>Book</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.search} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form>
         {this.state.books.map((book,i) =>  <Card key={i} book={book} handler={this.handler}/>)} 
         {this.state.books.map((book,i) =>  console.log(i))};
        </form>
      </div>
    );
  }
}

export default Form;