import React from 'react'
import { Container } from "react-bootstrap";

import { Router, Route, Switch } from "react-router-dom";
import { history } from "../_helpers/history";

import HomeNavbar from "./HomeNavbar";

import { MoviesDetailPage } from './moviesDetails/MoviesDetailPage';
import { Main } from './landingPage/Main';
import { TicketBookingPage } from './moviesDetails/TicketBookingPage';
// import { createBrowserHistory } from "history";




function App() {
  // const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Container fluid>
      <HomeNavbar />
      {/* <div> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/moviesDetail" component={MoviesDetailPage} />
          <Route path="/booking-ticket" component={TicketBookingPage} />
        </Switch>
      {/* </div> */}
      </Container>
    </Router>
  )
}

export default App

