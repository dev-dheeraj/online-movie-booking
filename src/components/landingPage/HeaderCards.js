import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    Row,
    Col,
    Card,
    Button
} from "react-bootstrap";



const HeaderCards = (props) => {
    return (
        <React.Fragment>
            {/* <Row> */}

                <Col xs={12} md={props.card !== '' && props.card == 'latest-movies' ? 12 : 4} sm={props.card !== '' && props.card == 'latest-movies' ? 12 : 4} style = {{display : props.card == 'latest-movies' ? '' : props.card == '' ? '' : 'none'}}>
                    <Card className='top-head-card' onClick= {()=> props.handleHeadCardClick('latest-movies')}>
                        <Card.Body>
                            <Card.Title className = {'text-center'}>Latest Movies</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={props.card !== '' && props.card == 'upcoming-movies' ? 12 : 4} sm={props.card !== '' && props.card == 'upcoming-movies' ? 12 : 4} 
                style = {{display : props.card == 'upcoming-movies' ? '' : props.card == '' ? '' : 'none'}}>
                    <Card className='top-head-card' onClick= {()=> props.handleHeadCardClick('upcoming-movies')}>
                        <Card.Body>
                            <Card.Title className = {'text-center'}>Upcoming Movies</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={props.card !== '' && props.card == 'nearby-events' ? 12 : 4} sm={props.card !== '' && props.card == 'nearby-events' ? 12 : 4} 
                style = {{display : props.card == 'nearby-events' ? '' : props.card == '' ? '' : 'none'}}>
                    <Card className='top-head-card' onClick= {()=> props.handleHeadCardClick('nearby-events')}>
                        <Card.Body >
                            <Card.Title className = {'text-center'}>Nearby Events</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            {/* </Row> */}

        </React.Fragment>


    )
}

export default HeaderCards


