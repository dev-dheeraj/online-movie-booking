import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    Carousel,
    Button,
    ListGroup
} from "react-bootstrap";
import QRCode from 'qrcode.react'
import { connect } from "react-redux";

import { moviesActions } from '../landingPage/actions/movies.action';

class TicketBookingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfSeat: 1,
            movieDetails: {},
            selectedDate: '',
            timeSelected: null,
            isBookingStart: false,
            bookingData: {}
        }
    }

    componentDidMount = () => {
        let url_string = window.location.href;
        let url = new URL(url_string);
        let movie_id = url.pathname
            ? url.pathname.substring(url.pathname.lastIndexOf("/") + 1)
            : "";

        this.props.dispatch(moviesActions.getMovieDetails({ movieId: movie_id }));
    }

    handleDateChange = (e) => {
        console.log(e.target.value, new Date());
        this.setState({
            selectedDate: e.target.value
        })

    };
    handleTimeSelect = (time) => {
        this.setState({
            timeSelected: time
        })
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.latestMovies && nextProps.latestMovies.movies_list && nextProps.latestMovies.movies_list._id) {
            this.setState({
                movieDetails: nextProps.latestMovies.movies_list
            })
        }
        else if (nextProps.latestMovies.error) {
            console.log('Movies list error : ', nextProps.latestMovies.error)

        }
    }


    handleSeatChange = (e) => {
        this.setState({
            numberOfSeat: e.target.value
        })
    }

    handleBook = () => {
        if(this.state.numberOfSeat && this.state.selectedDate && this.state.timeSelected){
            var data = {
                seat: this.state.numberOfSeat,
                date: this.state.selectedDate,
                time: this.state.timeSelected,
                name: this.state.movieDetails.name,
                type: this.state.movieDetails.type,
                rate: this.state.movieDetails.rate,
                language: this.state.movieDetails.language,
            }
            console.log(data)
            this.setState({
                isBookingStart: true,
                bookingData: data
            })
        }else{
            alert('Please select all the fields !')
        }


    }
    render() {
        // console.log(this.state.movieDetails)
        return (
            <div>

                {this.state.isBookingStart == true ?
                    <React.Fragment>
                        <Row>

                            {/* <Row > */}
                                <Col xs={12} md={4} sm={4} style = {{margin : '10% 0 0 0'}}>
                                    <Card >
                                        <QRCode
                                            id='abc'
                                            value={this.state.bookingData}
                                            style = {{height : '50vh', width : '100%'}}
                                        />

                                    </Card>
                                </Col>

                                <Col xs={12} md={8} sm={8} style = {{margin : '10% 0 0 0'}}>
                                    {/* <Row> */}
                                        {/* <Col xs={0} md={12} sm={6} lg={4}> */}
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Movie Name : {this.state.bookingData.name} </Card.Title>
                                                    <Card.Title>language : {this.state.bookingData.language}</Card.Title>
                                                    <Card.Title>type : {this.state.bookingData.type}</Card.Title>
                                                    <Card.Title>Show Time  : {this.state.bookingData.time}</Card.Title>
                                                    <Card.Title>Number of seats : {this.state.bookingData.seat}</Card.Title>
                                                    <Card.Title>Date  : {this.state.bookingData.date}</Card.Title>
                                                    <Card.Title>rate : {this.state.bookingData.rate}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        {/* </Col> */}

                                    {/* </Row> */}
                                </Col>
                            {/* </Row> */}
                        </Row>
                    </React.Fragment>

                    :
                    <React.Fragment>
                        <Row>
                            <Col xs={12} md={12} sm={12} >
                                <Card className={'ticket-card'}>
                                    <Card.Body>
                                        <Card.Title>Date :  <input value={this.state.selectedDate} type='date' onChange={(e) => this.handleDateChange(e)} placeholder={'choose date'} /></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} sm={12} >
                                <Card className={'ticket-sub-card'}>
                                    <Card.Body>
                                        <Card.Title>Available Show Timing : </Card.Title>
                                        <Button onClick={() => this.handleTimeSelect('9 AM')} style={{ margin: '5px' }} variant="secondary">9 AM</Button>
                                        <Button onClick={() => this.handleTimeSelect('12 PM')} variant="secondary" style={{ margin: '5px' }}>12 PM</Button>
                                        <Button onClick={() => this.handleTimeSelect('3 PM')} variant="secondary" style={{ margin: '5px' }}>3 PM</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} sm={12} >
                                <Card className={'ticket-sub-card'}>
                                    <Card.Body>
                                        <Card.Title>Choose Number Of Seat : <input value={this.state.numberOfSeat} type='number' onChange={(e) => this.handleSeatChange(e)} placeholder={'choose seat'} /></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} sm={12} >
                                <Card className={'ticket-sub-card text-center'} style={{ cursor: 'pointer', backgroundColor: '#3f91b5' }}>
                                    <Card.Body onClick={() => this.handleBook()}>
                                        <Card.Title>Book</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>


                    </React.Fragment>}


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
const connectedTicketBookingPage = connect(mapStateToProps)(TicketBookingPage);
export { connectedTicketBookingPage as TicketBookingPage };
