import React from 'react'
import {
    Row,
    Col,
    Card,
    Carousel,
    Button,
    ListGroup
} from "react-bootstrap";

const MovieCard = (props) => {
    // const {props.movieData, handleBookMovieButton} = props
    return (
        <React.Fragment>
            <Card style={{ margin: '15px' }}>
                <Card.Img variant="top" src={props.movieData.imageUrl} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{props.movieData.name}</Card.Title>
                    {/* <Card.Text style={{ textAlign: 'center' }}>{props.movieData.type}</Card.Text> */}
                    <Card.Text style={{ textAlign: 'center' }}>{props.movieData.language}</Card.Text>
                    
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Button style={{ width: '100%' }} onClick = {()=>props.handleBookMovieButton(props.movieData)}>Book</Button>
                        </ListGroup.Item>

                    </ListGroup>

                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default MovieCard
