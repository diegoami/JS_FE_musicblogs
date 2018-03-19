import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MusicBlog from './MusicBlog.js';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {


    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink href="/italian">Italian</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/russian">Russian</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/french">French</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/polish">Polish</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/romanian">Romanian</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/southslavic">South Slavic</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/easteurope">East Europe</NavLink>
                    </NavItem>
                </Nav>
                <Router>
                  <div className="App">
                      <Route path={'/:blogLng'} component={MusicBlogDrv} />

                  </div>
                </Router>
            </div>
    );
  }
}

const MusicBlogDrv = ({ match }) => (
   <MusicBlog url={match.params.blogLng} />
);


export default App;
