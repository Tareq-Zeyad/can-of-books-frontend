import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Bookitem extends React.Component {
    render() {
        return (

            <>
                {/* <Carousel variant="dark">
                    <Carousel.Item>
                        {this.props.item.map(item => {
                            return (
                                <div>
                                    <img
                                        className="d-block w-100"
                                        src="https://bilarabiya.net/wp-content/uploads/2020/07/art14c-29-143.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>{item.bookTitle}</h3>
                                        <p> {item.bookDescription} </p>
                                        <h4>  <h5> Availability : {item.bookStatus}</h5></h4>
                                    </Carousel.Caption>
                                </div>
                            )
                        })}
                    </Carousel.Item>
                </Carousel> */}
                {this.props.item.map(item => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.thoughtco.com/thmb/FKaSnt978lMBgSlzvhTiUU0CzgY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-942494908-06ddf35dd0dc476fbf73f11b5e978e74.jpg" />
                            <Card.Body>
                                <Card.Title>{item.bookTitle}</Card.Title>
                                <Card.Text>
                                    {item.bookDescription}
                                </Card.Text>
                                <Card.Text>
                                    <Button variant="primary" type="submit" onClick={() => this.props.deleteBook(item._id)} >Delete</Button>
                                    <Button variant="primary" type="submit" onClick={() => this.props.showUpdateForm(item)}>Update</Button>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                Availability : {item.bookStatus}
                            </Card.Footer>
                        </Card>
                    )
                })}


            </>
        )
    }
}

export default Bookitem;