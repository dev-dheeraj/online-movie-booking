import React, { Component } from 'react'
import { connect } from "react-redux";
import {
    Row,
    Col,
    Card,
    Carousel,
    Button,
    ListGroup
} from "react-bootstrap";
import { moviesActions } from '../landingPage/actions/movies.action';
import {history} from '../../_helpers/history';


 class MoviesDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetails : {}
        }
      }
      componentDidMount = ()=>{
        let url_string = window.location.href;
        let url = new URL(url_string);
        let movie_id = url.pathname
          ? url.pathname.substring(url.pathname.lastIndexOf("/") + 1)
          : "";

        this.props.dispatch(moviesActions.getMovieDetails({movieId : movie_id}));
      }
      

      componentWillReceiveProps=(nextProps)=>{
          if(nextProps && nextProps.latestMovies && nextProps.latestMovies.movies_list && nextProps.latestMovies.movies_list.length){
              this.setState({
                  movieDetails :nextProps.latestMovies.movies_list[0]
                })          
        }
        else if(nextProps.latestMovies.error){
            console.log('Movies list error : ',nextProps.latestMovies.error)
    
        }
    }
    handleBookNow = ()=>{
        // history.push('booking-ticket')
        window.location.href = `/booking-ticket/${this.state.movieDetails._id}`

    }
    
    render() {
        const {movieDetails} = this.state
        return (
            <div>
                <Row style ={{margin : '50px'}}>
                    <Col xs={6} md={6} sm={6}>
                        <Card style = {{height : '50vh'}}>
                            <Card.Img  style = {{height : '50vh'}} variant="top" src={movieDetails.imageUrl} />
                            <Card.Body>
                                {/* <Card.Title>Image</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6} md={6} sm={6}>
                        <Row>
                            <Col xs={0} md={6} sm={6} lg={4}>
                                <Card style = {{margin : '10px'}}>
                                    <Card.Body>
                                        <Card.Title>Name : {movieDetails.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            {movieDetails.name ?  <Col xs={0} md={6} sm={6} lg={4}>
                                <Card style = {{margin : '10px'}}>
                                    <Card.Body>
                                        <Card.Title>Release Date : {movieDetails.release}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>: null }
                            
                            <Col xs={12} md={12} sm={12}>
                                <Card style = {{margin : '15px'}}>
                                    <Card.Body>
                                        <Card.Title>Movie Duration : {movieDetails.duration ? movieDetails.duration : '2hr' } </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={12} sm={12}>
                                <Card style = {{margin : '15px'}}>
                                    <Card.Body>
                                        <Card.Title>Ratings : {movieDetails.rate}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Col>
                    <Col xs={12} md={12} sm={12}>
                        <Card onClick = {()=>this.handleBookNow(movieDetails)} style = {{margin : '15px', cursor: 'pointer', backgroundColor: '#3f91b5'}} className="text-center">
                            <Card.Body>
                                <Card.Title>Book Now</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { latestMovies } = state;
    return {
        latestMovies
    };
}
const connectedMoviesDetailPage = connect(mapStateToProps)(MoviesDetailPage);
export { connectedMoviesDetailPage as MoviesDetailPage };
