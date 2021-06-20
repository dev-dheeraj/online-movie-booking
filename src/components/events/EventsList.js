import React from "react";
import { connect } from "react-redux";
import {
    Row,
    Col,
    Card,
} from "react-bootstrap";

class EventsList extends React.Component {
    constructor(props) {
        super(props);

    }



    renderEventsList = () => {
        if (this.props.eventsList && this.props.eventsList.length) {
            return this.props.eventsList.map((item, ind) => {
                return <Col xs={12} md={4} sm={4} lg={3} key={ind}>
                    <Card style={{ margin: '15px' }}>
                        <Card.Img variant="top" src={item.imageUrl} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{item.name}</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
            })
        }

    }

    render() {
        console.log(this.props.eventsList)
        return (
            <React.Fragment>
                {/*  recommended movies cards */}
                <Row>
                    {this.renderEventsList()}
                </Row>
                {/*  recommended movies cards end */}

            </React.Fragment>


        );
    }
}


function mapStateToProps(state) {
    console.log('state : ', state)
    const { eventsList } = state;
    return {
        // eventsList
    };
}
const connectedEventsList = connect(mapStateToProps)(EventsList);
export { connectedEventsList as EventsList };

