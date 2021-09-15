import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from "@auth0/auth0-react"
import axios from 'axios';
import Bookitem from './Bookitem';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favBooksArr: [],
      bookTitle:'',
      bookDescription:'',
      bookStatus:'',
      ownerEmail:'',
      bookid:'',

      showmodels: false,
      showFlag: false,
    }

  }

  // to render the data directly
  componentDidMount = () => {
    const user = this.props.auth0;
    const email = user.email;
    console.log(email);
    axios
      .get(`http://localhost:3010/getbooks?email=${email}`)
      .then(result => {
        console.log(result.data);
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })
      // console.log(this.state.favBooksArr);
  }

  addBook = (event) => {
    event.preventDefault();
    // console.log('hello');
    const  user  = this.props.auth0;
    const email = user.email;

    const obj = {
      bookTitle: event.target.bookTitle.value,
      bookDescription: event.target.bookDescription.value,
      ownerEmail: email
    }
    axios
    .post(`http://localhost:3010/addBook`, obj)
    .then(result => {
      console.log(result.data);
      this.setState({
        favBooksArr: result.data
      })
    })
    .catch(err => {
      console.log('Error on adding data');
    })
  }

  showModalfunction = () => {
    this.setState({
      showmodels: true,
    })
  }
  hideModalfunction = () => {
    this.setState({
      showmodels: false,
    })
  }

  handleClose = () => {
    this.setState({
      showFlag: false,
    })
  }

  updateForm = (item) => {
    this.setState({
      showFlag: true,
      bookTitle : item.bookTitle,
      bookDescription : item.bookDescription,
      bookid : item._id
    })
  }

  // to be able to delete books
  deleteBook = (id) => {
    const user = this.props.auth0;
    const email = user.email;

    axios
    .delete(`http://localhost:3010/${id}?email=${email}`)
    .then(result => {
      this.setState({
        favBooksArr: result.data
      })
    })  
    .catch(err => {
      console.log('Error in deleting the book');
    })
  }

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <form onSubmit={this.addBook}>
          <fieldset>
          <legend> Add book: </legend>
          <input type='text' name='bookTitle' placeholder='Enter book title'/>
          <input type='text' name='bookDescription' placeholder='Write Description'/>
          <button type='submit' > Add </button>
          </fieldset>
        </form>
        {/* {this.state.favBooksArr.map(item => { */}
          return (
            <Bookitem
              item={this.state.favBooksArr}
            />

          )
        {/* }) */}
        
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
