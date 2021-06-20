import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "../App.css";

class HomeNavbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  rendertoHome = ()=>{
    window.location.href = `/`
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Navbar.Brand as={Link} onClick = {()=>{this.rendertoHome()}}>
          Online Movie Ticket
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HomeNavbar;
