import React from "react";
import { connect } from "react-redux";
import { history } from '../../_helpers/history'
import {
    Row,
    Col,
    Card,
    Carousel,
    Button,
    ListGroup
} from "react-bootstrap";

import MovieCard from './MovieCard'
import { moviesActions } from '../landingPage/actions/movies.action'

class MoviesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isBooking: false
        }
    }

    handleBookMovieButton = (item) => {
        console.log('movie book clicekd : ', { movieId: item._id })
        this.setState({ isBooking: true })
        this.props.dispatch(moviesActions.getMovieDetails({ movieId: item._id }));
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.latestMovies && nextProps.latestMovies.movies_list && this.state.isBooking == true) {
            // console.log('movies list : ',nextProps.latestMovies.movies_list)
            // history.push("/moviesDetail");
            var id = nextProps.latestMovies.movies_list[0]  && nextProps.latestMovies.movies_list[0]._id
            if(id){
                window.location.href = `/moviesDetail/${id}`
            }
        }
        else if (nextProps.latestMovies.error) {
            console.log('Movies list error : ', nextProps.latestMovies.error)
            // window.location.href = `/`
        }
    }

    renderMoviesList = () => {
        //   const [moviesList] = this.props
        if (this.props.moviesList && this.props.moviesList.length) {
            return this.props.moviesList.map((item, ind) => {
                return <Col xs={12} md={4} sm={4} lg={3} key={ind}>
                    {<MovieCard
                        movieData={item}
                        handleBookMovieButton={this.handleBookMovieButton}
                    />}
                </Col>
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                {/*  recommended movies cards */}
                <Row>
                    {this.renderMoviesList()}
                </Row>
                {/*  recommended movies cards end */}

            </React.Fragment>


        );
    }
}


function mapStateToProps(state) {
    const { latestMovies } = state;
    return {
        latestMovies
    };
}
const connectedMoviesList = connect(mapStateToProps)(MoviesList);
export { connectedMoviesList as MoviesList };

