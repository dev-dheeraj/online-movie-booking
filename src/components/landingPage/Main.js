import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { moviesActions } from './actions/movies.action'
import { eventsActions } from './actions/events.action'
import history from "../../_helpers/history";

import {
    Row,
    Col,
    Card
} from "react-bootstrap";

import HeaderCards from './HeaderCards'
import LatestMoviesSlider from './LatestMoviesSlider'
import { MoviesList } from '../movies/MoviesList'
import { EventsList } from '../events/EventsList'


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerCard: '',
            moviesList: [],
            xs: 12,
            md: 4,
            sm: 4,
            eventsList: [],
            error: ''
        }
    }
    componentDidMount = () => {
        this.props.dispatch(moviesActions.getLatestMovie());
    }

    handleHeadCardClick = (card) => {
        // history.push("/latest");

        switch (card) {
            case 'latest-movies':
                this.setState({
                    headerCard: card
                })
                this.props.dispatch(moviesActions.getLatestMovie());
                break;
            case 'upcoming-movies':
                this.setState({
                    headerCard: card
                })
                // console.log('card clicked = : ', card)
                this.props.dispatch(moviesActions.getUpcommingMovie());
                break;
            case 'nearby-events':
                this.setState({
                    headerCard: card
                })
                this.props.dispatch(eventsActions.getNearByEvents());
                break;

            default:
                break;
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.latestMovies && nextProps.latestMovies.movies_list) {
            // console.log('movies list : ',nextProps.latestMovies.movies_list)
            this.setState({
                moviesList: nextProps.latestMovies.movies_list,
                error: ''
            })
        }
        else if (nextProps.latestMovies.error) {
            console.log('Movies list error : ', nextProps.latestMovies.error)
            // window.location.href = `/`
            this.setState({ error: nextProps.latestMovies.error })
        }

        if (nextProps && nextProps.eventsList && nextProps.eventsList.events_list) {
            console.log('eventsList  : ', nextProps.eventsList.events_list)
            this.setState({
                eventsList: nextProps.eventsList.events_list,
                error: ''
            })
        }
        else if (nextProps.eventsList.error) {
            console.log('Movies list error : ', nextProps.eventsList.error)
            // window.location.href = `/`
            this.setState({ error: nextProps.eventsList.error })

        }
    }
    render() {
        return (
            <React.Fragment>
                <Row>
                    <HeaderCards
                        handleHeadCardClick={(card) => this.handleHeadCardClick(card)}
                        card={this.state.headerCard}
                    />
                </Row>

                {/* // latest movies image slider */}
                {this.state.headerCard == "" && this.state.error == "" ?
                    <LatestMoviesSlider moviesList={this.state.moviesList} />
                    : null}

                {/*  latest movies image slider end */}


                {/*  recommended movies cards */}
                {this.state.headerCard == "" || this.state.headerCard != 'nearby-events' ? <MoviesList
                    moviesList={this.state.moviesList}
                /> : null}
                {/*  recommended movies cards end */}

                {this.state.headerCard && this.state.headerCard == 'nearby-events' ? <EventsList
                    eventsList={this.state.eventsList}
                /> : null}

                {this.state.error !== "" ?
                    <Col xs={12} md={12} sm={12}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>No data Found</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    : null}

            </React.Fragment>


        );
    }
}

function mapStateToProps(state) {
    const { latestMovies, eventsList } = state;
    return {
        latestMovies,
        eventsList
    };
}
const connectedMain = connect(mapStateToProps)(Main);
export { connectedMain as Main };



