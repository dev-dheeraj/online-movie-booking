import React from 'react'
import { Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.css";
import { Main } from "./components/landingPage/Main";
import { MoviesDetailPage } from "./components/moviesDetails/MoviesDetailPage";
import { TicketBookingPage } from "./components/moviesDetails/TicketBookingPage";
import  HomeNavbar from "./components/HomeNavbar";
import history from "./_helpers/history";
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
  );
}

export default App;
