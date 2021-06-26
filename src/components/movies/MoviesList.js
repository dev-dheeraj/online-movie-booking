import React from "react";
import { connect } from "react-redux";
import {
    Row,
    Col,
} from "react-bootstrap";
import history from "../../_helpers/history";

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
        this.setState({ isBooking: true })
        this.props.dispatch(moviesActions.getMovieDetails({ movieId: item._id }));
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.latestMovies && nextProps.latestMovies.movies_list && this.state.isBooking == true) {
            var id = nextProps.latestMovies.movies_list  && nextProps.latestMovies.movies_list._id
            if(id){
                history.push(`/moviesDetail/${id}`)

            }
        }
        else if (nextProps.latestMovies.error) {
            console.log('Movies list error : ', nextProps.latestMovies.error)
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

