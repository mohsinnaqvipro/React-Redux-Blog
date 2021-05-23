import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import Home from "./Home";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <div className="App">
      {/* <HeaderContainer /> */}
      {/* <HomeContainer /> */}
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">BLOG</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/users">
                <Link to="/users">User List</Link>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/create">
                <Link to="/create">Create User</Link>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
