
import React from 'react'
import {
    Row,
    Col,
    Card,
    Carousel,
    Button,
    ListGroup
} from "react-bootstrap";

const LatestMoviesSlider = (props) => {
    return (
        <React.Fragment>
            {/* // latest movies image slider */}
            <Carousel>
                {props && props.moviesList && props.moviesList.length ? 
                props.moviesList.map((item, ind)=>{
                    return <Carousel.Item interval={500} key ={ind}>
                        <img
                            className="d-block w-100 imageSlider"
                            src={item.imageUrl}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                }): null}
            </Carousel>
            {/*  latest movies image slider end */}
        </React.Fragment>
    )
}

export default LatestMoviesSlider
