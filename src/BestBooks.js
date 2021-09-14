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
    }

  }

  // to render the data directly
  componentDidMount = () => {
    const { user } = this.props.auth0;
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
  }

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.favBooksArr.map(item => {
          return (
            <Bookitem
              item={item}
            />

          )
        })
        }
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
